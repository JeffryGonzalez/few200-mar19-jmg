import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { Observable } from 'rxjs';
import * as actions from '../../actions/counter.actions';

@Component({
  selector: 'app-redux-demo',
  templateUrl: './redux-demo.component.html',
  styleUrls: ['./redux-demo.component.css']
})
export class ReduxDemoComponent implements OnInit {

  count$: Observable<number>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    // doing it this way has cost S2 TONS of refactoring time.
    this.count$ = this.store.select(s => s.counter.count);
  }


  increment() {
    this.store.dispatch(new actions.CountIncremented());
  }

  decrement() {
    this.store.dispatch(new actions.CountDecremented());
  }

  reset() {
    this.store.dispatch(new actions.ResetCounter());
  }
}
