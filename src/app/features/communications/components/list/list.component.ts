import { Component, OnInit, Input } from '@angular/core';
import { ListItem } from '../../models';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  @Input() items: ListItem[] = [];
  @Input() title = 'Your Todo List';
  constructor() { }

  ngOnInit() {
  }

}
