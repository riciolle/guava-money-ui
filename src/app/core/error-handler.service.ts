import { MessageService } from 'primeng/api';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private messageService: MessageService) { }

  handle(errorResponse: any) {
    let msg: string;

    if (typeof errorResponse === 'string') {
      msg = errorResponse;
    } else if (errorResponse instanceof Response && errorResponse.status >= 400 && errorResponse.status <= 499) {
      let errors;
      msg = 'Ocorreu um erro ao processar a sua solicitação';

      try {
        errors = errorResponse.json();
        msg = errors[0].mensageUser;
        // console.log(errors[0].mensageDevelop);
      } catch (e) { }

      console.error('Ocorreu um erro', errorResponse);

    } else {
      msg = 'Erro ao processar serviço remoto. Tente novamente';
      console.log('Ocorreu um erro inesperado ' + errorResponse);
    }

    this.messageService.add({ severity: 'error', summary: 'Mensageiro Guava', detail: ' ' + msg });
  }
}
