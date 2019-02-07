import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../seguranca/auth.service';
import { LogoutService } from './../../seguranca/logout.service';
import { ErrorHandlerService } from './../error-handler.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {

  exibindoMenu = false;

  items: MenuItem[];

  constructor(
    public auth: AuthService,
    private logoutService: LogoutService,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Cadastro',
        icon: 'pi pi-pw pi-file',
        items: [{
          label: 'Lançamentos',
          icon: 'pi pi-fw pi-plus',
          items: [
            {
              label: 'Cadastrar', icon: 'pi pi-fw pi-external-link', routerLink: '/lancamento/novo',
              visible: this.auth.havePermission('ROLE_CADASTRAR_LANCAMENTO'), routerLinkActiveOptions: 'ativo'
            },
            {
              label: 'Consulta', icon: 'pi pi-fw pi-filter', routerLink: '/lancamento',
              visible: this.auth.havePermission('ROLE_PESQUISAR_LANCAMENTO'), routerLinkActiveOptions: 'ativo'
            }
          ]
        },
        {
          label: 'Pessoas',
          icon: 'pi pi-fw pi-plus',
          items: [
            {
              label: 'Cadastrar', icon: 'pi pi-fw pi-external-link', routerLinkActiveOptions: 'ativo', routerLink: '/pessoa/novo',
              visible: this.auth.havePermission('ROLE_CADASTRAR_PESSOA')
            },
            {
              label: 'Consulta', icon: 'pi pi-fw pi-filter', routerLinkActiveOptions: 'ativo', routerLink: '/pessoa',
              visible: this.auth.havePermission('ROLE_PESQUISAR_PESSOA')
            }
          ]
        }]
      },
      {
        label: 'Relatórios',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Lançamentos', icon: 'pi pi-fw pi-file', routerLinkActiveOptions: 'ativo', routerLink: '/relatorio/lancamento',
            visible: this.auth.havePermission('ROLE_PESQUISAR_LANCAMENTO')
          },
          {
            label: 'Pessoa', icon: 'pi pi-fw pi-file', routerLinkActiveOptions: 'ativo', routerLink: '/relatorio/pessoa',
            visible: this.auth.havePermission('ROLE_PESQUISAR_PESSOA')
          }
        ]
      },
      {
        label: 'Ações',
        icon: 'pi pi-fw pi-cog',
        items: [
          { separator: true },
          { label: 'Logout', icon: 'pi pi-fw pi-times', command: ((click) => this.logout()) }
        ]
      }
    ];
  }

  logout() {
    this.logoutService.logout()
      .then(() => {
        this.exibindoMenu = false;
        this.router.navigate(['/login']);
      })
      .catch(error => this.errorHandlerService.handle(error));
  }

  exibindoNavBar() {
    return this.router.url !== '/login';
  }

}
