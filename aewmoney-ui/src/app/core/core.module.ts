import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ErrorHandlerService } from './error-handler.service';
import { CategoriaService } from '../categorias/categoria.service';
import { RouterModule } from '@angular/router';
import { LancamentoService } from '../lancamentos/lancamento.service';


registerLocaleData(localePt);

@NgModule({
  declarations: [NavbarComponent],
  exports : [NavbarComponent, RouterModule],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    ErrorHandlerService,
    CategoriaService,
    LancamentoService
  ]
})
export class CoreModule { }
