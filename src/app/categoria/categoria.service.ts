import { HttpClient } from '@angular/common/http';


import { Injectable } from '@angular/core';
import { GuavaMoneyHttp } from '../seguranca/guava-money-http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoriaURL = 'http://localhost:8080/categorias';

  constructor(private http: GuavaMoneyHttp) { }

  listarTodos(): Promise<any> {
    return this.http.get(`${this.categoriaURL}?`)
      .toPromise()
      .then(response => response);
  }

}
