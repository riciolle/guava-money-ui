import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPayLoad: any;

  constructor(
    private http: Http,
    private jwtHelper: JwtHelperService
  ) {
    this.carregarToken();
  }

  login(usuario: string, senha: string): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic Z3VhdmE6Z3VAdkA=');

    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, { headers })
      .toPromise()
      .then(response => {
        this.armazenarToKen(response.json().access_token);
      })
      .catch(response => {
        if (response.status === 400) {
          const responseJson = response.json();
          if (responseJson.error === 'invalid_grant') {
            return Promise.reject('Usuário ou senha inválida ! ');
          }
        }

        return Promise.reject(response);
      });
  }

  private armazenarToKen(token: string) {
    this.jwtPayLoad = this.jwtHelper.decodeToken(token);
    console.log('O token é ' + token);
    localStorage.setItem('token', token);
  }

  private carregarToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.armazenarToKen(token);
    }
  }

}
