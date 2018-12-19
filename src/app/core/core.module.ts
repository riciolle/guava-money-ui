import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastModule } from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { NavbarComponent } from './navbar/navbar.component';
import { PessoaService } from './../pessoa/pessoa.service';
import { LancamentoService } from './../lancamento/lancamento.service';
import { ErrorHandlerService } from './error-handler.service';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations:
    [
      NavbarComponent,
      PageNotFoundComponent
    ],
  imports:
    [
      CommonModule,
      RouterModule,
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
      ConfirmationService
    ]
})
export class CoreModule { }
