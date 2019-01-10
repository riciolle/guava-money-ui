import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Pessoa } from './../core/model';
import { GuavaMoneyHttp } from '../seguranca/guava-money-http';
import { environment } from './../../environments/environment';
export class PessoaFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoaURL: string;

  constructor(private http: GuavaMoneyHttp) {
    this.pessoaURL = `${environment.apiUrl}/pessoa`;
  }

  consultar(filtro: PessoaFiltro): Promise<any> {

    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    return this.http.get<any>(`${this.pessoaURL}/search`, { params })
      .toPromise()
      .then(response => {
        const pessoas = response.content;
        const resultado = {
          pessoas,
          total: response.totalElements
        };

        return resultado;
      });
  }

  consultarTodasPessoas(): Promise<any> {

    return this.http.get<any>(`${this.pessoaURL}`)
      .toPromise()
      .then(response => response.content);
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.pessoaURL}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  updateStatus(codigo: number, ativo: boolean): Promise<void> {
    return this.http.put(`${this.pessoaURL}/${codigo}/ativo`, ativo, { headers: headers })
      .toPromise()
      .then(() => null);
  }

  salvar(pessoa: Pessoa): Promise<Pessoa> {
    return this.http.post<Pessoa>(`${this.pessoaURL}`, pessoa, { headers: headers })
      .toPromise();
  }

  atualizar(pessoa: Pessoa): Promise<Pessoa> {
    return this.http.put<Pessoa>(`${this.pessoaURL}/${pessoa.codigo}`, pessoa, { headers: headers })
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Pessoa> {
    return this.http.get<Pessoa>(`${this.pessoaURL}/${codigo}`)
      .toPromise();
  }
}
