import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Pessoa } from './../core/model';

export class PessoaFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoaURL = 'http://localhost:8080/pessoa';

  constructor(private http: HttpClient) { }

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

    return this.http.get(`${this.pessoaURL}?`)
      .toPromise()
      .then(response => response);
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.pessoaURL}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  updateStatus(codigo: number, ativo: boolean): Promise<void> {
    return this.http.put(`${this.pessoaURL}/${codigo}/ativo`, ativo)
      .toPromise()
      .then(() => null);
  }

  salvar(pessoa: Pessoa): Promise<Pessoa> {
    return this.http.post(`${this.pessoaURL}`, JSON.stringify(pessoa))
      .toPromise()
      .then(response => response as Pessoa);
  }

  atualizar(pessoa: Pessoa): Promise<Pessoa> {
    return this.http.put(`${this.pessoaURL}/${pessoa.codigo}`, JSON.stringify(pessoa))
      .toPromise()
      .then(response => response as Pessoa);
  }

  buscarPorCodigo(codigo: number): Promise<Pessoa> {
    return this.http.get(`${this.pessoaURL}/${codigo}`)
      .toPromise()
      .then(response => response as Pessoa);
  }
}
