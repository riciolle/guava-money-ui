import { MessagesModule } from 'primeng/messages';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoaGridComponent } from './pessoa-grid/pessoa-grid.component';
import { SharedModule } from './../shared/shared.module';

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
    PessoaPesquisaComponent,
    PessoaCadastroComponent,
    PessoaGridComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
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
    PessoaPesquisaComponent,
    PessoaCadastroComponent
  ]
})
export class PessoaModule { }
