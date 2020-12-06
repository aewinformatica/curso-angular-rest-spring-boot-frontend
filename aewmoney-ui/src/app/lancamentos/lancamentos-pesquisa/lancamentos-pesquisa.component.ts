import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/components/common/api';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { LancamentoFiltro, LancamentoService } from '../lancamento.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit  {

  lancamentos = [];
  filtro = new LancamentoFiltro();
  pagina: 0;
  itensPorPagina = this.filtro.itensPorPagina;
  totalRegistros: 0;



  constructor(
     private lancamentoService: LancamentoService,
     private toastyService: ToastyService,
     private confirmationService: ConfirmationService,
     private errorHandlerService: ErrorHandlerService,
    ) { }

  ngOnInit(): void {

  }

  pesquisar(pagina = 0): Promise<any> {
    this.filtro.pagina = pagina;

    return this.lancamentoService.pesquisar(this.filtro).then(dados => {
       this.lancamentos = dados.lancamentos;
       this.totalRegistros = dados.total;
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const paginaAtual = event.first / event.rows;
    this.pesquisar(paginaAtual);
  }
  confirmarExclusao(lancamento: any){
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir',
      accept: () => {
        this.excluir(lancamento);
      }
    });
  }

  excluir(lancamento: any) {
    this.lancamentoService.excluir(lancamento.codigo)
    .then( () => {
      this.pesquisar(this.filtro.pagina);
      this.toastyService.success(`Lançamento de ${lancamento.descricao}, excluído com sucesso!`);
    }).catch(erro => this.errorHandlerService.handle(erro));
  }
}
