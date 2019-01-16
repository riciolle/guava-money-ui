import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    // IMPORTAÇÂO DOS MODULOS DOS SISTEMA
    CoreModule,
    SegurancaModule,
    AppRoutingModule,

    // IMPORTAÇÂO DAS FUNCIONALIDADES ANGULAR
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
