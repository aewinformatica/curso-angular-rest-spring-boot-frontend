import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';
import { PessoaFiltro, PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  nome: string;
  filtro = new PessoaFiltro();

  pessoas = [];
  pagina: 0;
  itensPorPagina = this.filtro.itensPorPagina;
  totalRegistros: 0;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.pesquisar(this.pagina = 0);
  }
  pesquisarTodasPessoas() {
    this.pessoaService.pesquisarTodasPessoas()
    .then(dados => { this.pessoas = dados; } );
  }

  pesquisar(pagina = 0): Promise<any> {

    this.filtro.pagina = pagina;

    return this.pessoaService.pesquisar(this.filtro).then(dados => {
      this.pessoas = dados.pessoas;
      this.totalRegistros = dados.total;
      });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const paginaAtual = event.first / event.rows;
    this.pesquisar(paginaAtual);
  }

  excluir(pessoa: any) {
    this.pessoaService.excluir(pessoa.codigo)
      .then(() => {
        // this.grid.first = 0;
      });
  }
}
