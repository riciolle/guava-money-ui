import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CategoriaModule } from './categoria/categoria.module';
import { CoreModule } from './core/core.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { LancamentoModule } from './lancamento/lancamento.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // IMPORTAÇÂO DOS MODULOS DOS SISTEMA
    LancamentoModule,
    PessoaModule,
    CategoriaModule,
    CoreModule,
    AppRoutingModule,

    // IMPORTAÇÂO DAS FUNCIONALIDADES ANGULAR
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
