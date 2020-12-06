import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { ButtonModule } from 'primeng/components/button/button';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoasGridComponent } from './pessoas-grid/pessoas-grid.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DropdownModule,
    InputTextModule,
    InputMaskModule,
    InputTextareaModule,
    CalendarModule,
    ButtonModule,
    SelectButtonModule,
    DataTableModule,
    TooltipModule,
    RouterModule
  ],
  declarations: [PessoaCadastroComponent,
    PessoasPesquisaComponent,
    PessoasGridComponent],
  exports: [PessoaCadastroComponent,
    PessoasPesquisaComponent]

})
export class PessoasModule { }
