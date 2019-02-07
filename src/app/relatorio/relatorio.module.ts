import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarModule } from 'primeng/calendar';

import { SharedModule } from './../shared/shared.module';
import { RelatorioRoutingModule } from './relatorio-routing.module';
import { RelatorioLancamentoComponent } from './relatorio-lancamento/relatorio-lancamento.component';
import { RelatorioPessoaComponent } from './relatorio-pessoa/relatorio-pessoa.component';

@NgModule({
  declarations: [
    RelatorioLancamentoComponent,
    RelatorioPessoaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,

    SharedModule,
    RelatorioRoutingModule
  ]
})
export class RelatorioModule { }
