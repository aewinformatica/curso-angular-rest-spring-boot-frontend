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
    this.cidadeService.consultar()
        .then(dados => { this.cidades = dados; });
  }

  adicionar(nome: string) {
    alert(nome);
  }

  excluir(id: number) {
    alert(id);
  }

  atualizar(cidade: any) {
    alert(JSON.stringify(cidade));
  }
}
