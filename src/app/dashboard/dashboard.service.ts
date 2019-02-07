import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { GuavaMoneyHttp } from './../seguranca/guava-money-http';
import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  lancamentosURL: string;

  constructor(private http: GuavaMoneyHttp) {
    this.lancamentosURL = `${environment.apiUrl}/lancamentos`;
  }

  lancamnetosPorCategoria(): Promise<Array<any>> {
    return this.http.get<any>(`${this.lancamentosURL}/estatisticas/por-categoria`)
      .toPromise()
      .then(response => response);
  }

  lancamentosPorDia(): Promise<Array<any>> {
    return this.http.get<any>(`${this.lancamentosURL}/estatisticas/por-dia`)
      .toPromise()
      .then(response => {
        const dados = response;
        this.convertStringToDate(dados);
        return dados;
      });
  }

  private convertStringToDate(dados: Array<any>) {
    for (const dado of dados) {
      dado.dia = moment(dado.dia, 'YYYY-MM-DD').toDate();
    }
  }
}
