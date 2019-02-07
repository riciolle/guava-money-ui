import { RelatorioPessoaComponent } from './relatorio-pessoa/relatorio-pessoa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../seguranca/auth.guard';
import { RelatorioLancamentoComponent } from './relatorio-lancamento/relatorio-lancamento.component';

const routes: Routes = [
  {
    path: 'lancamento',
    component: RelatorioLancamentoComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_LANCAMENTO']}
  },
  {
    path: 'pessoa',
    component: RelatorioPessoaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_PESSOA']}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatorioRoutingModule { }
