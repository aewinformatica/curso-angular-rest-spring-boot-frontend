import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pessoas-grid',
  templateUrl: './pessoas-grid.component.html',
  styleUrls: ['./pessoas-grid.component.css']
})
export class PessoasGridComponent {

  @Input() pessoas = [];
  @Input() itensPorPagina = 0;
  @Input() totalRegistros = 0;

  @Output() trocarPagina = new EventEmitter();
  @Output() removerPessoa = new EventEmitter();

  @ViewChild('tabela', {static: true}) grid;

  paginar(event) {
    this.trocarPagina.emit(event);
  }

  remover(event) {
    this.removerPessoa.emit(event);
    this.grid.first = 0;
  }


}
