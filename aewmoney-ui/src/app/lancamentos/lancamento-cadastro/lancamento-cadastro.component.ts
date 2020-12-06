import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/categorias/categoria.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { PessoaService } from 'src/app/pessoas/pessoa.service';
import { Lancamento } from 'src/app/core/model';
import { FormControl } from '@angular/forms';
import { LancamentoService } from '../lancamento.service';
import { ToastyService } from 'ng2-toasty';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {



  tipos = [
    {
        label: 'Receita', value: 'RECEITA'
    },
    {
      label: 'Despesa', value: 'DESPESA'
    }
  ];

  categorias = [];
  // categorias = [
  //   { label: 'Alimentação', value: 1 },
  //   { label: 'Transporte', value: 2 },
  // ];

  pessoas = [
    // { label: 'João da Silva', value: 4 },
    // { label: 'Sebastião Souza', value: 9 },
    // { label: 'Maria Abadia', value: 3 },
  ];

    lancamento = new Lancamento();

  constructor(private route: ActivatedRoute,
              private categoriaService: CategoriaService,
              private pessoaService: PessoaService,
              private lancamentoService: LancamentoService,
              private toastyService: ToastyService,
              private errorHandlerService: ErrorHandlerService) { }

  ngOnInit() {
    const codigoLancamento = this.route.snapshot.params['codigo'];

    if (codigoLancamento) {
      this.carregarLancamento(codigoLancamento);
    }

    this.carregarCategorias();
    this.carregarPessoas();
  }
  salvar(form: FormControl) {
    this.lancamentoService.adicionar(this.lancamento)
    .then( () => {
      this.toastyService.success('Lancamento adicionado com sucesso');
      form.reset();
      this.lancamento = new Lancamento ();
    } )
    .catch(erro => this.errorHandlerService.handle(erro));

  }
  carregarCategorias() {
    return this.categoriaService.listarTodas().then (
    dados => {
        this.categorias = dados.map(c => ({ label: c.nome, value: c.codigo }));//usa o parentesis por volta do arrow function
    }).catch(erro => this.errorHandlerService.handle(erro));
  }

  carregarPessoas() {
    return this.pessoaService.pesquisarTodasPessoas().then (
      dados => {
        this.pessoas = dados.map(p => ( {label:p.nome, value: p.codigo }));
      }).catch(erro => this.errorHandlerService.handle(erro));
  }
  carregarLancamento(codigo: number) {
    this.lancamentoService.buscarPorCodigo(codigo)
    .then( lancamento => this.lancamento = lancamento )
    .catch(erro => this.errorHandlerService.handle(erro));
  }
}
