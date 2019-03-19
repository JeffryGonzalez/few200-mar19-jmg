import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-setter',
  templateUrl: './setter.component.html',
  styleUrls: ['./setter.component.css']
})
export class SetterComponent implements OnInit {


  constructor(public service: MessageService) { }

  ngOnInit() {
  }

  setItem(val: string) {
    // do something with that.
    this.service.setMessage(val);
  }

}
