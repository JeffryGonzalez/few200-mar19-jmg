import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationsComponent } from './communications.component';
import { ListComponent } from './components/list/list.component';
import { EntryComponent } from './components/entry/entry.component';

@NgModule({
  declarations: [CommunicationsComponent, ListComponent, EntryComponent],
  imports: [
    CommonModule
  ],
  exports: [CommunicationsComponent]
})
export class CommunicationsModule { }
