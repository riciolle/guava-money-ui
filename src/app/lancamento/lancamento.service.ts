import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

import * as moment from 'moment';

export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentoURL = 'http://localhost:8080/lancamentos';

  constructor(private http: Http) { }

  consultar(filtro: any): Promise<any> {

    const headers = new Headers();
    const params = new URLSearchParams();

    headers.append('Authorization', 'Basic bWFyaWFAZ3VhdmFtb25leS5jb206YWRtaW4=');

    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());

    if (filtro.descricao) {
      params.set('descricao', filtro.descricao);
    }

    if (filtro.dataVencimentoInicio) {
      params.set('dataVencimentoDe',
        moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
    }

    if (filtro.dataVencimentoFim) {
      params.set('dataVencimentoAte',
        moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    }

    return this.http.get(`${this.lancamentoURL}?resume`,
      { headers, search: params })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const lancamentos = responseJson.content;

        const resultado = {
          lancamentos,
          total: responseJson.totalElements
        };

        return resultado;
      });
  }

  excluir(codigo: number): Promise<void> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic bWFyaWFAZ3VhdmFtb25leS5jb206YWRtaW4=');

    return this.http.delete(`${this.lancamentoURL}/${codigo}`, { headers })
      .toPromise()
      .then(() => null);
  }

}