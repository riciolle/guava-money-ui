import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastModule } from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { NavbarComponent } from './navbar/navbar.component';
import { PessoaService } from './../pessoa/pessoa.service';
import { LancamentoService } from './../lancamento/lancamento.service';
import { ErrorHandlerService } from './error-handler.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthService } from './../seguranca/auth.service';
import { GuavaMoneyHttp } from '../seguranca/guava-money-http';

@NgModule({
  declarations:
    [
      NavbarComponent,
      PageNotFoundComponent
    ],
  imports:
    [
      CommonModule,
      HttpClientModule,
      RouterModule,
      // HttpClientModule,
      // IMPORTAÇÂO DO PRIMENG
      ToastModule,
      ConfirmDialogModule,
    ],
  exports:
    [
      NavbarComponent,
      ToastModule,
      ConfirmDialogModule,
    ],
  providers:
    [
      ErrorHandlerService,
      LancamentoService,
      PessoaService,
      MessageService,
      ConfirmationService,
      AuthService,
      JwtHelperService,
      GuavaMoneyHttp
    ]
})
export class CoreModule { }
