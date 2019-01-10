import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { GuavaMoneyHttp } from './guava-money-http';
import { environment } from './../../environments/environment';
@Injectable()
export class LogoutService {

  tokenRevokeUrl: string;

  constructor(
    private guavaMoneyHttp: GuavaMoneyHttp,
    private auth: AuthService
  ) {
    this.tokenRevokeUrl = `${environment.apiUrl}/token/revoke`;
  }

  logout() {
    return this.guavaMoneyHttp.delete(this.tokenRevokeUrl, { withCredentials: true })
      .toPromise()
      .then(() => {
        this.auth.clearAccessToken();
      });
  }

}
