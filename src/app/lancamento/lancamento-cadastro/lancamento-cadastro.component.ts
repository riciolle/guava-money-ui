import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Lancamento } from './../../core/model';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { CategoriaService } from './../../categoria/categoria.service';
import { PessoaService } from './../../pessoa/pessoa.service';
import { LancamentoService } from './../lancamento.service';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' }
  ];

  categorias = [];
  pessoas = [];
  lancamento = new Lancamento();

  constructor(
    private categoriaService: CategoriaService,
    private errorHandlerService: ErrorHandlerService,
    private messageService: MessageService,
    private lancamentoService: LancamentoService,
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const codigoLancamento = this.route.snapshot.params['codigo'];
    if (codigoLancamento) {
      this.buscarLancamentoPorCodigo(codigoLancamento);
    }
    this.carregarCategorias();
    this.carregarPessoas();
  }

  get editando() {
    return Boolean(this.lancamento.codigo);
  }

  novo(form: FormControl) {
    // form.reset();
    this.lancamento = new Lancamento();
    this.router.navigate(['/lancamento/novo']);
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarLancamento(form);
    } else {
      this.salvaLancamento(form);
    }
  }

  salvaLancamento(form: FormControl) {
    this.lancamentoService.salvar(this.lancamento)
      .then(lancamento => {
        this.messageService.add({ severity: 'success', summary: 'Mensageiro Guava', detail: 'Lançamento adicionado com sucesso !' });
        this.router.navigate(['/lancamento', lancamento.codigo]);
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  atualizarLancamento(form: FormControl) {
    this.lancamentoService.atualizar(this.lancamento)
      .then(lancamento => {
        this.lancamento = lancamento;

        this.messageService.add({ severity: 'success', summary: 'Mensageiro Guava', detail: 'Lançamento atualizado com sucesso !' });
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  buscarLancamentoPorCodigo(codigo: number) {
    return this.lancamentoService.buscarPorCodigo(codigo)
      .then(lancamento => {
        this.lancamento = lancamento;
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  carregarCategorias() {
    return this.categoriaService.listarTodos()
      .then(categorias => {
        this.categorias = categorias.map(categoria => {
          return { label: categoria.nome, value: categoria.codigo };
        });
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  carregarPessoas() {
    return this.pessoaService.consultarTodasPessoas()
      .then(pessoas => {
        this.pessoas = pessoas.map(pessoa => {
          return { label: pessoa.nome, value: pessoa.codigo };
        });
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }
}
