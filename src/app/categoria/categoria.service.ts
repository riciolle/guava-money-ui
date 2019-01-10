import { HttpClient } from '@angular/common/http';


import { Injectable } from '@angular/core';
import { GuavaMoneyHttp } from '../seguranca/guava-money-http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoriaURL: string;

  constructor(private http: GuavaMoneyHttp) {
    this.categoriaURL = `${environment.apiUrl}/categorias`;
  }

  listarTodos(): Promise<any> {
    return this.http.get(`${this.categoriaURL}?`)
      .toPromise()
      .then(response => response);
  }

}
