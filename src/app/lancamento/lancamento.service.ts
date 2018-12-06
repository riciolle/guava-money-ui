import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentoURL = 'http://localhost:8080/lancamentos';

  constructor(private http: Http) {}

  consultar(): Promise<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic bWFyaWFAZ3VhdmFtb25leS5jb206YWRtaW4=');

    return this.http.get(`${this.lancamentoURL}?resumo`, { headers })
      .toPromise()
      .then(response => {
        console.log(response.json());
      });
  }
}
