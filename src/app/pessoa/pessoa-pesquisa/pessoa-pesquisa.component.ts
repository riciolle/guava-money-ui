import { Component, OnInit, ViewChild } from '@angular/core';

import { ConfirmationService } from 'primeng/api';
import { LazyLoadEvent, MessageService } from 'primeng/components/common/api';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { PessoaFiltro, PessoaService } from './../pessoa.service';
import { Pessoa } from 'src/app/core/model';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent implements OnInit {

  @ViewChild('tabela') grid;
  totalRegistros = 0;
  filtro = new PessoaFiltro();
  pessoas = [];
  pessoa = new Pessoa();

  constructor(
    private pessoaService: PessoaService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() { }

  consultar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.pessoaService.consultar(this.filtro)
      .then(resultado => {
        this.pessoas = resultado.pessoas;
        this.totalRegistros = resultado.total;
      });
  }

  proximaPagina(event: LazyLoadEvent) {
    this.consultar(event.first / event.rows);
  }

  confirmarExclusao(pessoa: any) {
    this.confirmationService.confirm({
      message: 'Deseja excluir o pessoa?',
      accept: () => {
        this.excluir(pessoa);
      }
    });
  }

  excluir(pessoa: any) {
    this.pessoaService.excluir(pessoa.codigo)
      .then(() => {
        this.consultar();
        this.messageService.add({ severity: 'success', summary: 'Mensageiro Guava', detail: 'Pessoa excluida com sucesso' });
      })
      .catch(errorHandler => this.errorHandler.handle(errorHandler));
  }

  updateStatus(pessoa: any): void {

    const novoStatus = !pessoa.ativo;
    this.pessoaService.updateStatus(pessoa.codigo, novoStatus)
      .then(() => {
        const acao = novoStatus ? 'ativada' : 'desativada';
        pessoa.ativo = novoStatus;
        this.messageService.add({ severity: 'success', summary: 'Mensageiro Guava', detail: `Pessoa ${acao} com sucesso!` });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
