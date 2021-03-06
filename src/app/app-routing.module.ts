import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaoAutorizadoComponent } from './nao-autorizado/nao-autorizado.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes =
  [
    { path: 'lancamento', loadChildren: './lancamento/lancamento.module#LancamentoModule' },
    { path: 'pessoa', loadChildren: './pessoa/pessoa.module#PessoaModule' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: 'relatorio', loadChildren: './relatorio/relatorio.module#RelatorioModule' },

    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'nao-autorizado', component: NaoAutorizadoComponent },
    { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
    { path: '**', redirectTo: 'pagina-nao-encontrada' }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
