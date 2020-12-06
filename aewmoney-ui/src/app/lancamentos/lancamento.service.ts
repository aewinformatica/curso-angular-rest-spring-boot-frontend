import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import * as moment from 'moment';
import { Lancamento } from '../core/model';

export class LancamentoFiltro {
descricao: string;
dataVencimentoInicio: Date;
dataVencimentoFim: Date;
pagina = 0;
itensPorPagina = 5;

}

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {


  lancamentosUrl = 'http://localhost:8080/lancamentos';

  constructor(private http: Http) { }

  pesquisar(filtro: LancamentoFiltro): Promise<any> {

    const headers = new Headers();
    const params = new URLSearchParams();

    // FUNDAMENTAL PARA A PAGINACAO
    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());

    if (filtro.descricao) {
      params.set('descricao', filtro.descricao);
    }

    if (filtro.dataVencimentoInicio) {
      params.set('dataVencimentoDe',
        moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
    }

    if (filtro.dataVencimentoFim) {
      params.set('dataVencimentoAte',
        moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    }

    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.get(`${this.lancamentosUrl}?resumo`, { headers, search: params })
        .toPromise()
        .then(response => {

          const lancamentos = response.json().content;
          const responseJson = response.json();

          const resultado = {
          lancamentos,
          total: responseJson.totalElements
          };
          return resultado;
        });
  }

 excluir(codigo: number): Promise<any> {

    const headers = new Headers();

    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.delete(`${this.lancamentosUrl}/${codigo}`, { headers })
        .toPromise()
        .then(() => null);
  }

  adicionar(lancamento: Lancamento): Promise<Lancamento> {

    const headers = new Headers();

    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.lancamentosUrl,JSON.stringify(lancamento), { headers })
        .toPromise()
        .then(response => response.json());
  }

  atualizar(lancamento: Lancamento): Promise<Lancamento> {

    const headers = new Headers();

    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    headers.append('Content-Type', 'application/json');

    return this.http.put(this.lancamentosUrl, JSON.stringify(lancamento), { headers })
        .toPromise()
        .then( response => {

         const lancamentoAlterado = response.json().content as Lancamento;
         this.converterStringsParaDatas([lancamentoAlterado]);

         return lancamentoAlterado;
        });
  }

  buscarPorCodigo(codigo: number): Promise<Lancamento> {
    const headers = new Headers();

    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.get(`${this.lancamentosUrl}/${codigo}`, { headers })
        .toPromise()
        .then( response => {

          const lancamento = response.json().content as Lancamento;

          this.converterStringsParaDatas([lancamento]);

          return lancamento;
        });
  }

  private converterStringsParaDatas(lancamentos: Lancamento[] = []) {
    for (const lancamento of lancamentos) {

      if (lancamento.dataVencimento) {
      lancamento.dataVencimento = moment(lancamento.dataVencimento,
        'YYYY-MM-DD').toDate();
      }

      if (lancamento.dataPagamento) {
        lancamento.dataPagamento = moment(lancamento.dataPagamento,
          'YYYY-MM-DD').toDate();
      }
    }
  }

}
