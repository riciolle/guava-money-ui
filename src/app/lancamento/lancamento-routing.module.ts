import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LancamentoPesquisaComponent } from './lancamento-pesquisa/lancamento-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';

const routes: Routes =
  [
    { path: 'lancamento', component: LancamentoPesquisaComponent },
    { path: 'lancamento/novo', component: LancamentoCadastroComponent },
    { path: 'lancamento/:codigo', component: LancamentoCadastroComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentoRoutingModule { }
