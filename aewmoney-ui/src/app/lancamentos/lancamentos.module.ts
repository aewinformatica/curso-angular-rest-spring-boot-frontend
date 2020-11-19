import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ButtonModule } from 'primeng/components/button/button';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentosGridComponent } from './lancamentos-grid/lancamentos-grid.component';




@NgModule({
  declarations: [LancamentoCadastroComponent, LancamentosPesquisaComponent, LancamentosGridComponent],
  exports: [LancamentoCadastroComponent, LancamentosPesquisaComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CurrencyMaskModule,
    DropdownModule,
    InputTextModule,
    InputMaskModule,
    InputTextareaModule,
    CalendarModule,
    ButtonModule,
    SelectButtonModule,
    DataTableModule,
    TooltipModule,
  ]
})
export class LancamentosModule { }
