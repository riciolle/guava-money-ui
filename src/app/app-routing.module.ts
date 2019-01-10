import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './core/page-not-found.component';
import { PageNotAuthorizedComponent } from './core/page-not-authorized.component';

const routes: Routes =
  [
    { path: '', redirectTo: 'lancamento', pathMatch: 'full' },
    { path: 'nao-autorizado', component: PageNotAuthorizedComponent },
    // { path: 'page-not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: 'page-not-found' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
