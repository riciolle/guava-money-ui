import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { CategoriaService } from './../../categoria/categoria.service';
import { PessoaService } from './../../pessoa/pessoa.service';
import { LancamentoService } from './../lancamento.service';

import { MessageService } from 'primeng/api';
import 'rxjs/add/operator/map';

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
  formulario: FormGroup;

  constructor(
    private categoriaService: CategoriaService,
    private errorHandlerService: ErrorHandlerService,
    private messageService: MessageService,
    private lancamentoService: LancamentoService,
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.configurarForm();

    const codigoLancamento = this.route.snapshot.params['codigo'];
    if (codigoLancamento) {
      this.buscarLancamentoPorCodigo(codigoLancamento);
    }
    this.carregarCategorias();
    this.carregarPessoas();
  }

  configurarForm() {
    this.formulario = this.formBuilder.group({
      codigo: [],
      tipo: ['RECEITA', Validators.required],
      dataVencimento: [null, Validators.required],
      dataPagamento: [],
      descricao: [null, [Validators.required, Validators.minLength(5)]],
      valor: [null, Validators.required],
      pessoa: this.formBuilder.group({
        codigo: [null, Validators.required],
        nome: []
      }),
      categoria: this.formBuilder.group({
        codigo: [null, Validators.required],
        nome: []
      }),
      observacao: []
    });
  }

  get editando() {
    return Boolean(this.formulario.get('codigo').value);
  }

  novo() {
    this.formulario.reset();
    this.router.navigate(['/lancamento/novo']);
  }

  salvar() {
    if (this.editando) {
      this.atualizarLancamento();
    } else {
      this.salvaLancamento();
    }
  }

  salvaLancamento() {
    this.lancamentoService.salvar(this.formulario.value)
      .then(lancamento => {
        this.messageService.add({ severity: 'success', summary: 'Mensageiro Guava', detail: 'Lançamento adicionado com sucesso !' });
        this.router.navigate(['/lancamento', lancamento.codigo]);
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  atualizarLancamento() {
    this.lancamentoService.atualizar(this.formulario.value)
      .then(lancamento => {
        this.formulario.patchValue(lancamento);
        this.messageService.add({ severity: 'success', summary: 'Mensageiro Guava', detail: 'Lançamento atualizado com sucesso !' });
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  buscarLancamentoPorCodigo(codigo: number) {
    return this.lancamentoService.buscarPorCodigo(codigo)
      .then(lancamento => {
        this.formulario.patchValue(lancamento);
      })
      .catch(erro => {
        this.errorHandlerService.handle(erro);
      });
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
