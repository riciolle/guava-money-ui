import { RouterModule } from '@angular/router';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastModule } from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { CategoriaService } from './../categoria/categoria.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoaService } from './../pessoa/pessoa.service';
import { LancamentoService } from './../lancamento/lancamento.service';
import { ErrorHandlerService } from './error-handler.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthService } from './../seguranca/auth.service';
import { GuavaMoneyHttp } from '../seguranca/guava-money-http';
import { PageNotAuthorizedComponent } from './page-not-authorized.component';

@NgModule({
  imports:
    [
      CommonModule,
      HttpClientModule,
      RouterModule,
      // IMPORTAÇÂO DO PRIMENG
      ToastModule,
      ConfirmDialogModule,
    ],
  declarations:
    [
      NavbarComponent,
      PageNotFoundComponent,
      PageNotAuthorizedComponent
    ],
  exports:
    [
      NavbarComponent,
      ToastModule,
      ConfirmDialogModule,
    ],
  providers:
    [
      LancamentoService,
      PessoaService,
      CategoriaService,
      ErrorHandlerService,
      AuthService,

      MessageService,
      ConfirmationService,
      JwtHelperService,
      GuavaMoneyHttp,
      { provide: LOCALE_ID, useValue: 'pt-BR' }
    ]
})
export class CoreModule { }
