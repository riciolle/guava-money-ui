import { SharedModule } from './../shared/shared.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { LancamentoGridComponent } from './lancamento-grid/lancamento-grid.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';

import { InputMaskModule } from 'primeng/inputmask';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { EditorModule } from 'primeng/editor';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [
    LancamentosPesquisaComponent,
    LancamentoCadastroComponent,
    LancamentoGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,

    // IMPORTAÇÂO DAS FUNCIONALIDADES PRIMENG
    AppRoutingModule,
    AccordionModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    EditorModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    InputMaskModule
  ],
  exports: [
    LancamentosPesquisaComponent,
    LancamentoCadastroComponent
  ]
})
export class LancamentoModule { }
