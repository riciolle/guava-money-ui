import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './core/page-not-found.component';
import { PageNotAuthorizedComponent } from './core/page-not-authorized.component';
import { PessoaPesquisaComponent } from './pessoa/pessoa-pesquisa/pessoa-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamento/lancamento-cadastro/lancamento-cadastro.component';
import { LancamentoPesquisaComponent } from './lancamento/lancamento-pesquisa/lancamento-pesquisa.component';

const routes: Routes =
  [
    { path: 'lancamento', loadChildren: './lancamento/lancamento.module#LancamentoModule' },
    { path: 'pessoa', loadChildren: './pessoa/pessoa.module#PessoaModule' },

    { path: '', redirectTo: 'lancamento', pathMatch: 'full' },
    // { path: 'nao-autorizado', component: PageNotAuthorizedComponent },
    // { path: 'pagina-nao-encontrada', component: PageNotFoundComponent },
    { path: '**', redirectTo: 'pagina-nao-encontrada' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
