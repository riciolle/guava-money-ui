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

  private items: MenuItem[];

  private items2: MenuItem[];

  exibindoMenu = false;

  constructor(
    public auth: AuthService,
    private logoutService: LogoutService,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) {

  }

  ngOnInit() {

    this.items = [{
      label: 'File',
      items: [
        { label: 'New', icon: 'fa fa-plus', routerLinkActiveOptions: 'ativo', routerLink: '/pessoa' },
        { label: 'Open', icon: 'fa fa-download' }
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', icon: 'fa fa-refresh' },
        { label: 'Redo', icon: 'fa fa-repeat' }
      ]
    }];

    this.items2 = [
      {
          label: 'Next',
          icon: 'pi pi-fw pi-chevron-right'
      },
      {
          label: 'Prev',
          icon: 'pi pi-fw pi-chevron-left'
      }
  ];

  }

  logout() {
    this.logoutService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => this.errorHandlerService.handle(error));
  }

}
