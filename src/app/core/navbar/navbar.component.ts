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

  constructor(
    public auth: AuthService,
    private logoutService: LogoutService,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) { }

  ngOnInit() { }

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
