import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoaRoutingModule } from './pessoa-routing.module';
import { SharedModule } from './../shared/shared.module';

import { PanelModule } from 'primeng/panel';
import { InputMaskModule } from 'primeng/inputmask';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { EditorModule } from 'primeng/editor';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { PessoaCadastroContatoComponent } from './pessoa-cadastro-contato/pessoa-cadastro-contato.component';

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
    InputMaskModule,
    PanelModule,
    DialogModule
  ],
  declarations: [
    PessoaPesquisaComponent,
    PessoaCadastroComponent,
    PessoaCadastroContatoComponent
  ],
  exports: []
})
export class PessoaModule { }
