import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoriaURL = 'http://localhost:8080/categoria';

  constructor(private http: Http) { }
}
