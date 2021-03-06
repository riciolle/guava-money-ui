import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MessageService } from 'primeng/api';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Pessoa, Contato } from 'src/app/core/model';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  pessoa = new Pessoa();

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private pessoaService: PessoaService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const codigoPessoa = this.route.snapshot.params['codigo'];

    if (codigoPessoa) {
      this.carregarPessoa(codigoPessoa);
    }
  }

  get editando() {
    return Boolean(this.pessoa.codigo);
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarPessoa(form);
    } else {
      this.adicionarPessoa(form);
    }
  }

  carregarPessoa(codigo: number) {
    this.pessoaService.buscarPorCodigo(codigo)
      .then(pessoa => {
        this.pessoa = pessoa;
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  adicionarPessoa(form: FormControl) {
    this.pessoaService.salvar(this.pessoa).then(() => {
      this.messageService.add({ severity: 'success', summary: 'Mensageiro Guava', detail: 'Pessoa salva com sucesso !' });
      form.reset();
      this.pessoa = new Pessoa();
    })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  atualizarPessoa(form: FormControl) {
    this.pessoaService.atualizar(this.pessoa)
      .then(pessoa => {
        this.pessoa = pessoa;
        this.messageService.add({ severity: 'success', summary: 'Mensageiro Guava', detail: 'Pessoa alterada com sucesso!' });
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  novo(form: FormControl) {
    this.pessoa = new Pessoa();
    this.router.navigate(['/pessoa/novo']);
  }

}
