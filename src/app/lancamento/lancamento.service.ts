import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as moment from 'moment';
import 'rxjs/add/operator/toPromise';

import { Lancamento } from './../core/model';
import { GuavaMoneyHttp } from '../seguranca/guava-money-http';
import { environment } from './../../environments/environment';

export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  pagina = 0;
  itensPorPagina = 5;
}

const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentoURL: string;

  constructor(private http: GuavaMoneyHttp) {
    this.lancamentoURL = `${environment.apiUrl}/lancamentos`;
  }

  urlUploadAnexo(): string {
    return `${this.lancamentoURL}/anexo`;
  }

  consultar(filtro: LancamentoFiltro): Promise<any> {

    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.descricao) {
      params = params.append('descricao', filtro.descricao);
    }

    if (filtro.dataVencimentoInicio) {
      params = params.set('dataVencimentoDe',
        moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
    }

    if (filtro.dataVencimentoFim) {
      params = params.set('dataVencimentoAte',
        moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    }

    return this.http.get<any>(`${this.lancamentoURL}?resume`, { params })
      .toPromise()
      .then(response => {
        const lancamentos = response.content;
        const resultado = {
          lancamentos,
          total: response.totalElements
        };

        return resultado;
      });
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.lancamentoURL}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  salvar(lancamento: Lancamento): Promise<Lancamento> {
    return this.http.post<Lancamento>(`${this.lancamentoURL}`, JSON.stringify(lancamento), { headers: headers })
      .toPromise();
  }

  atualizar(lancamento: Lancamento): Promise<Lancamento> {
    console.log(lancamento.anexo);
    return this.http.put<Lancamento>(`${this.lancamentoURL}/${lancamento.codigo}`, JSON.stringify(lancamento), { headers: headers })
      .toPromise()
      .then(response => {
        const lancamentoAlterado = response;

        this.convertStringParaDatas([lancamentoAlterado]);

        return lancamentoAlterado;
      });
  }

  buscarPorCodigo(codigo: number): Promise<Lancamento> {
    return this.http.get<Lancamento>(`${this.lancamentoURL}/${codigo}`)
      .toPromise()
      .then(response => {
        const lancamento = response;

        this.convertStringParaDatas([lancamento]);

        return lancamento;
      });
  }

  private convertStringParaDatas(lancamentos: Lancamento[]) {
    for (const lancamento of lancamentos) {
      lancamento.dataVencimento = moment(lancamento.dataVencimento, 'YYYY-MM-DD').toDate();
      if (lancamento.dataPagamento) {
        lancamento.dataPagamento = moment(lancamento.dataPagamento, 'YYYY-MM-DD').toDate();
      }
    }
  }

  uploadFile() {
    return this.http.post(`${this.urlUploadAnexo}`, null, { headers: headers }).toPromise();
  }

}
