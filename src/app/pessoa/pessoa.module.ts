import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoaRoutingModule } from './pessoa-routing.module';
import { SharedModule } from './../shared/shared.module';

import { InputMaskModule } from 'primeng/inputmask';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { EditorModule } from 'primeng/editor';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,

    PessoaRoutingModule,
    SharedModule,

    // IMPORTAÇÂO DAS FUNCIONALIDADES PRIMENG
    AccordionModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    EditorModule,
    CurrencyMaskModule,
    InputMaskModule
  ],
  declarations: [
    PessoaPesquisaComponent,
    PessoaCadastroComponent
  ],
  exports: []
})
export class PessoaModule { }
