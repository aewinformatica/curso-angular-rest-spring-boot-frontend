import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CidadeService } from './cidade.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // tslint:disable-next-line: deprecation
    HttpModule
  ],
  providers: [CidadeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
