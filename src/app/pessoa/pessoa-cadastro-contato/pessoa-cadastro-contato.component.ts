import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

import { Contato } from './../../core/model';
@Component({
  selector: 'app-pessoa-cadastro-contato',
  templateUrl: './pessoa-cadastro-contato.component.html',
  styleUrls: ['./pessoa-cadastro-contato.component.css']
})
export class PessoaCadastroContatoComponent implements OnInit {

  @Input() contatos: Array<Contato>;
  exibindoFomularioContato = false;
  contato: Contato;
  contatoIndex: number;

  constructor() { }

  ngOnInit() {
  }

  prepararNovoContato() {
    this.exibindoFomularioContato = true;
    this.contato = new Contato();
    this.contatoIndex = this.contatos.length;
  }

  confimarContato(frm: FormControl) {
    this.contatos[this.contatoIndex] = this.clonarContato(this.contato);
    this.exibindoFomularioContato = false;
    frm.reset();
  }

  editarContato(contato: Contato, index: number) {
    this.contato = this.clonarContato(contato);
    this.exibindoFomularioContato = true;
    this.contatoIndex = index;
  }

  removerContato(index: number) {
    this.contatos.splice(index, 1);
  }

  clonarContato(contato: Contato): Contato {
    return new Contato(contato.codigo, contato.nome, contato.email, contato.telefone);
  }

get editando() {
  return this.contato && this.contato.codigo != null;
}

}
