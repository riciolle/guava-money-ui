import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './message/message.component';

import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  imports: [
    CommonModule,
    // IMPORTAÇÂO DAS FUNCIONALIDADES PRIMENG
    MessagesModule,
    MessageModule
  ],
  declarations: [
    MessageComponent
  ],
  exports: [
    MessageComponent,
    MessagesModule,
    MessageModule
  ]
})
export class SharedModule { }
