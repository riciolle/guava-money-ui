import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ResponseContentType } from '@angular/http';

import * as moment from 'moment';

import { GuavaMoneyHttp } from './../seguranca/guava-money-http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  lancamentoURL: string;

  constructor(
    private http: GuavaMoneyHttp
  ) {
    this.lancamentoURL = `${environment.apiUrl}/lancamentos`;
  }

  relatorioLancamentoPorPessoa(inicio: Date, fim: Date) {

    const params = new HttpParams()
      .append('dtInicio', moment(inicio).format('YYYY-MM-DD'))
      .append('dtFim', moment(fim).format('YYYY-MM-DD'));

    return this.http.get(`${this.lancamentoURL}/relatorio/por-pessoa`, { params, responseType: 'blob' }).toPromise();
  }
}
