import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Pessoa } from 'src/app/core/model';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  pessoa = new Pessoa();

  constructor(private pessoaService: PessoaService,
              private toastyService: ToastyService,
              private errorHandlerService: ErrorHandlerService) { }

  ngOnInit() {
  }

  salvar(form: FormControl) {

    this.pessoaService.adicionar(this.pessoa)
        .then(() => {
           this.toastyService.success('Pessoa Adicionada com Sucesso');
           form.reset();
           this.pessoa = new Pessoa();
          })
        .catch(erro => this.errorHandlerService.handle(erro));
  }

}
