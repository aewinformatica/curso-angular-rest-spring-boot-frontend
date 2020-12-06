import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams} from '@angular/http';
import { Pessoa } from '../core/model';

export class PessoaFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 3;
}

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  PessoasUrl = 'http://localhost:8080/pessoas';

  constructor(private http: Http) { }

  pesquisarTodasPessoas(): Promise<any> {

    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.get(this.PessoasUrl, {headers}).toPromise().then(dados => dados.json().content);
  }

  pesquisar(filtro: PessoaFiltro): Promise<any> {

    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    const params = new URLSearchParams();
    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
    params.set('nome', filtro.nome);
    }

    return this.http.get(this.PessoasUrl, { headers, search: params })
    .toPromise().then(
      response => {
        const pessoas = response.json().content;
        const responseJson = response.json();
        const resultado = {
          pessoas,
          total: responseJson.totalElements
        };
        return resultado;
    });
  }
  excluir(codigo: number): Promise<any> {

    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.delete(`${this.PessoasUrl}/${codigo}`, {headers})
    .toPromise()
    .then(() => null);
  }

  adicionar(pessoa: Pessoa): Promise<Pessoa> {

    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.PessoasUrl, JSON.stringify(pessoa), {headers})
    .toPromise()
    .then(response => response.json());
  }

  buscarPorCodigo(arg0: any) {
    throw new Error('Method not implemented.');
  }
}
