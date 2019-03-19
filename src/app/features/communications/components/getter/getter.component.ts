import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-getter',
  templateUrl: './getter.component.html',
  styleUrls: ['./getter.component.css']
})
export class GetterComponent implements OnInit, OnDestroy {

  message$: Observable<string>;
  // subscription: Subscription;
  message = 'Default';
  today = new Date();
  constructor(private service: MessageService) { }

  ngOnInit() {
    this.message$ = this.service.getObservable();
    // this.subscription = this.message$.subscribe(m => {
    //   console.log('Ok - got the next issue!');
    //   this.message = m;
    // });
  }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  getIt() {
    this.message = this.service.getMessage();
  }
}
