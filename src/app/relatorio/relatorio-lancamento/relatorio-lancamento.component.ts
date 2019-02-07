import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { RelatorioService } from './../relatorio.service';
@Component({
  selector: 'app-relatorio-lancamento',
  templateUrl: './relatorio-lancamento.component.html',
  styleUrls: ['./relatorio-lancamento.component.css']
})
export class RelatorioLancamentoComponent implements OnInit {

  periodoInicio: Date;
  periodoFim: Date;

  constructor(
    private relatorioService: RelatorioService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit() {
  }

  gerar() {
    this.relatorioService.relatorioLancamentoPorPessoa(this.periodoInicio, this.periodoFim)
    .then(relatorio => {
      const url = window.URL.createObjectURL(relatorio);
      if (url) {
        window.open(url);
      }
    })
    .catch(erro => this.errorHandlerService.handle(erro));
  }

}
