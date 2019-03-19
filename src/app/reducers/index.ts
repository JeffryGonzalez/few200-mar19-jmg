import * as fromCounter from './counter';

export interface State {
  counter: fromCounter.State;
}

export const reducers = {
  counter: fromCounter.reducer
};
