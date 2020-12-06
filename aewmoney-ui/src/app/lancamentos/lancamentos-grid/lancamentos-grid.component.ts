import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-lancamentos-grid',
  templateUrl: './lancamentos-grid.component.html',
  styleUrls: ['./lancamentos-grid.component.css']
})
export class LancamentosGridComponent {





  @Input() lancamentos = [];
  @Input() itensPorPagina = 0;
  @Input() totalRegistros = 0;

  @Output() trocarPagina = new EventEmitter();
  @Output() removerLancamento = new EventEmitter();

  @ViewChild('tabela', {static: true}) grid;


  paginar(event) {
    this.trocarPagina.emit(event);
  }

  remover(event) {
    this.removerLancamento.emit(event);
    console.log(event);

    this.grid.first = 0;

  }


}
