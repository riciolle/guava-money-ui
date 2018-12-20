import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';

const routes: Routes =
  [
    { path: 'pessoa', component: PessoaPesquisaComponent },
    { path: 'pessoa/novo', component: PessoaCadastroComponent },
    { path: 'pessoa/:codigo', component: PessoaCadastroComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
