import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoriaURL = 'http://localhost:8080/categorias';

  constructor(private http: Http) { }

  listarTodos(): Promise<any> {

    const headers = new Headers();

    headers.append('Authorization', 'Basic bWFyaWFAZ3VhdmFtb25leS5jb206YWRtaW4=');

    return this.http.get(`${this.categoriaURL}?`, { headers })
      .toPromise()
      .then(response => response.json());
  }

}
