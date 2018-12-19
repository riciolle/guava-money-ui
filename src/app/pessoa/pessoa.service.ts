import { Http, Headers, URLSearchParams } from '@angular/http';
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

  constructor(private http: Http) { }

  consultar(filtro: any): Promise<any> {

    const headers = new Headers();
    const params = new URLSearchParams();

    headers.append('Authorization', 'Basic bWFyaWFAZ3VhdmFtb25leS5jb206YWRtaW4=');

    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.pessoaURL}/search`,
      { headers, search: params })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const pessoas = responseJson.content;

        const resultado = {
          pessoas,
          total: responseJson.totalElements
        };

        return resultado;
      });
  }

  consultarTodasPessoas(): Promise<any> {
    const headers = new Headers();

    headers.append('Authorization', 'Basic bWFyaWFAZ3VhdmFtb25leS5jb206YWRtaW4=');
    return this.http.get(`${this.pessoaURL}?`, { headers })
      .toPromise()
      .then(response => response.json());
  }

  excluir(codigo: number): Promise<void> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic bWFyaWFAZ3VhdmFtb25leS5jb206YWRtaW4=');

    return this.http.delete(`${this.pessoaURL}/${codigo}`, { headers })
      .toPromise()
      .then(() => null);
  }

  updateStatus(codigo: number, ativo: boolean): Promise<void> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic bWFyaWFAZ3VhdmFtb25leS5jb206YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.pessoaURL}/${codigo}/ativo`, ativo, { headers })
      .toPromise()
      .then(() => null);
  }

  salvar(pessoa: Pessoa): Promise<Pessoa> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic bWFyaWFAZ3VhdmFtb25leS5jb206YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.post(`${this.pessoaURL}`, JSON.stringify(pessoa), { headers })
      .toPromise()
      .then(response => response.json());
  }

  atualizar(pessoa: Pessoa): Promise<Pessoa> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic bWFyaWFAZ3VhdmFtb25leS5jb206YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.pessoaURL}/${pessoa.codigo}`, JSON.stringify(pessoa), { headers })
      .toPromise()
      .then(response => response.json() as Pessoa);
  }

  buscarPorCodigo(codigo: number): Promise<Pessoa> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic bWFyaWFAZ3VhdmFtb25leS5jb206YWRtaW4=');
    return this.http.get(`${this.pessoaURL}/${codigo}`, { headers })
      .toPromise()
      .then(response => response.json() as Pessoa);
  }
}
