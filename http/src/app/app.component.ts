import { Component, OnInit } from '@angular/core';
import { CidadeService } from './cidade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'http';

  cidades = [];

  constructor(private cidadeService: CidadeService) {}

  ngOnInit() {
    this.consultar();
  }

  consultar() {

    this.cidadeService.consultar()
    .then(dados => { this.cidades = dados; });
  }
  adicionar(nome: string) {
    this.cidadeService.adicionar({ nome })
                      .then(cidade => {
                        alert(`cidade "${cidade.nome}" adicionada com o codigo ${cidade.id}.`)

                        this.consultar();
                      });
  }

  excluir(id: number) {
    this.cidadeService.excluir(id)
    .then(() => { alert('cidade Excluida com Sucesso'); } );

    this.consultar();
  }

  atualizar(cidade: any) {
    this.cidadeService.atualizar(cidade)
    .then(
       c => { alert(`cidade alterada com sucesso para ${c.nome}`); }
    );
  }
}
