import { RouterModule } from '@angular/router';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';

import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastModule } from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ContextMenuModule } from 'primeng/contextmenu';

import { CategoriaService } from './../categoria/categoria.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoaService } from './../pessoa/pessoa.service';
import { LancamentoService } from './../lancamento/lancamento.service';
import { ErrorHandlerService } from './error-handler.service';
import { AuthService } from './../seguranca/auth.service';
import { GuavaMoneyHttp } from '../seguranca/guava-money-http';
import { DashboardService } from './../dashboard/dashboard.service';
import { RelatorioService } from './../relatorio/relatorio.service';
import { NaoAutorizadoComponent } from './../nao-autorizado/nao-autorizado.component';
import { PaginaNaoEncontradaComponent } from './../pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

registerLocaleData(localePt);

@NgModule({
  imports:
    [
      CommonModule,
      HttpClientModule,
      RouterModule,
      // IMPORTAÇÂO DO PRIMENG
      ToastModule,
      ConfirmDialogModule,
      MenuModule,
      ContextMenuModule,
      PanelMenuModule
    ],
  declarations:
    [
      NavbarComponent,
      PaginaNaoEncontradaComponent,
      NaoAutorizadoComponent,
      HeaderComponent,
      FooterComponent
    ],
  exports:
    [
      NavbarComponent,
      HeaderComponent,
      FooterComponent,
      ToastModule,
      ConfirmDialogModule
    ],
  providers:
    [
      LancamentoService,
      PessoaService,
      CategoriaService,
      ErrorHandlerService,
      AuthService,
      DashboardService,
      RelatorioService,
      GuavaMoneyHttp,

      ConfirmationService,
      MessageService,
      JwtHelperService,
      { provide: LOCALE_ID, useValue: 'pt' }
    ]
})
export class CoreModule { }

