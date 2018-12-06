import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LancamentoModule } from './lancamento/lancamento.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { LancamentoService } from './lancamento/lancamento.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // IMPORTAÇÂO DOS MODULOS DOS SISTEMA
    LancamentoModule,
    PessoaModule,
    CoreModule,

    // IMPORTAÇÂO DAS FUNCIONALIDADES ANGULAR
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [LancamentoService],
  bootstrap: [AppComponent]
})

export class AppModule { }
