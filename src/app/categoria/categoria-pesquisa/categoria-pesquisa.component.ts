import { MessageService, ConfirmationService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

import { CategoriaService } from './../categoria.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-categoria-pesquisa',
  templateUrl: './categoria-pesquisa.component.html',
  styleUrls: ['./categoria-pesquisa.component.css']
})
export class CategoriaPesquisaComponent implements OnInit {

  categorias = [];

  constructor(
    private categoriaService: CategoriaService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() { }

  listarTodos() {
    console.log('Passou aqui 1');
    this.categoriaService.listarTodos()
      .then(resultado => {
        this.categorias = resultado;
      })
      .catch(errorHandler => this.errorHandler.handle(errorHandler));
  }

}
