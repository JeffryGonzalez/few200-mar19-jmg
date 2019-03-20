import * as fromCounter from './counter';
import { createSelector } from '@ngrx/store';
export interface State {
  counter: fromCounter.State;
}

export const reducers = {
  counter: fromCounter.reducer
};


// Selectors

// 1. If in a feature, create a feature select

// 2. Create a memoized selector for each branch of the state.

const selectCounterBranch = (state: State) => state.counter;



export const selectCurrent = createSelector(selectCounterBranch, c => c.count);

export const selectCountingBy = createSelector(selectCounterBranch, c => c.by);


// Start doing the homework

export const selectDecrementDisabled = createSelector(
  selectCurrent,
  selectCountingBy,
  canWeDecrement);

export const selectResetDisabled = createSelector(selectCurrent, c => c === 0);



function canWeDecrement(a: number, b: number) {
  return (a - b) < 0;
}
