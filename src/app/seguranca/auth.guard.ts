import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authService.isAccessTokenInvalid()) {
      console.log('Navegação com access token inválido. Obtendo novo token...');
      return this.authService.newAccessToken()
        .then(() => {
          if (this.authService.isAccessTokenInvalid()) {
            this.router.navigate(['/login']);
            return false;
          }
          return true;
        });

    } else if (next.data.roles && !this.authService.haveAnyPermission(next.data.roles)) {
      this.router.navigate(['/nao-autorizado']);
      return false;
    }

    return true;
  }
}
