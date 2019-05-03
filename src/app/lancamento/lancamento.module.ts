import { SharedModule } from './../shared/shared.module';
import { LancamentoRoutingModule } from './lancamento-routing.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentoPesquisaComponent } from './lancamento-pesquisa/lancamento-pesquisa.component';

import { PanelModule } from 'primeng/panel';
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
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    LancamentoRoutingModule,
    SharedModule,

    // IMPORTAÇÂO DAS FUNCIONALIDADES PRIMENG
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
    InputMaskModule,
    PanelModule,
    FileUploadModule,
    ProgressSpinnerModule
  ],
  declarations: [
    LancamentoPesquisaComponent,
    LancamentoCadastroComponent
  ],
  exports: []
})
export class LancamentoModule { }
