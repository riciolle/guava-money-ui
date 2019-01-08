import { AuthService } from './../../seguranca/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent } from 'primeng/components/common/api';
import { MessageService, ConfirmationService } from 'primeng/api';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { LancamentoService, LancamentoFiltro } from '../lancamento.service';

@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css']
})
export class LancamentoPesquisaComponent implements OnInit {

  @ViewChild('tabela') grid;
  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  lancamentos = [];

  constructor(
    private lancamentoService: LancamentoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private auth: AuthService
  ) { }

  ngOnInit() { }

  consultar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.lancamentoService.consultar(this.filtro)
      .then(resultado => {
        this.lancamentos = resultado.lancamentos;
        this.totalRegistros = resultado.total;
      })
      .catch(errorHandler => this.errorHandler.handle(errorHandler));
  }

  proximaPagina(event: LazyLoadEvent) {
    this.consultar(event.first / event.rows);
  }

  confirmarExclusao(lancamento: any) {
    this.confirmationService.confirm({
      message: 'Deseja excluir o lancamento?',
      accept: () => {
        this.excluir(lancamento);
      }
    });
  }

  excluir(lancamento: any) {
    this.lancamentoService.excluir(lancamento.codigo)
      .then(() => {
        this.consultar();
        this.messageService.add({ severity: 'success', summary: 'Serviço de Mensagem', detail: 'Lançamento excluido com sucesso' });
      })
      .catch(errorHandler => this.errorHandler.handle(errorHandler));
  }

}
