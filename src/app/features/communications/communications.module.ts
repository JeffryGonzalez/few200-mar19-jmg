import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationsComponent } from './communications.component';
import { ListComponent } from './components/list/list.component';
import { EntryComponent } from './components/entry/entry.component';
import { SetterComponent } from './components/setter/setter.component';
import { GetterComponent } from './components/getter/getter.component';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [CommunicationsComponent, ListComponent, EntryComponent, SetterComponent, GetterComponent],
  imports: [
    CommonModule
  ],
  exports: [CommunicationsComponent],
  providers: [MessageService]
})
export class CommunicationsModule { }
