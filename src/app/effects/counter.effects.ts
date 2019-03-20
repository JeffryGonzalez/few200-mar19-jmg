import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, map, filter } from 'rxjs/operators';

import * as countActions from '../actions/counter.actions';
import * as appActions from '../actions/app.actions';
@Injectable()
export class CounterEffects {


  @Effect()
  loadCountBy$ = this.actions$
    .pipe(
      ofType(appActions.APP_START), // if it is the app start
      map(() => localStorage.getItem('count')), // go check to see if we have a count
      filter(by => by !== null), // if we do...
      map(by => parseInt(by, 10)), // turn it into a number
      map(by => new countActions.SetCountBy(by)) // dispatch this into the reducer
    );

  @Effect({
    dispatch: false
  }) saveCountBy$ = this.actions$
    .pipe(
      ofType(countActions.COUNT_BY_SET), // Action { type: string}
      map(a => a as countActions.SetCountBy), /// SetCountBy { type: string, by:number}
      map(a => a.by.toString()), // string
      tap(a => localStorage.setItem('count', a))
    );

  // @Effect({
  //   dispatch: false
  // }) logAllActions$ = this.actions$
  //   .pipe(
  //     tap(a => console.log(a.type))
  //   );


  constructor(private actions$: Actions) {

  }
}
