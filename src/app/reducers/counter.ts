// import { Action } from '@ngrx/store';
import * as actions from '../actions/counter.actions';



export interface State {
  count: number;
}

const initialState: State = {
  count: 0
};

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.RESET: {
      return initialState;
    }
    case actions.INCREMENT: {
      return {
        count: state.count + 1
      };
    }
    case actions.DECREMENT: {
      return {
        count: state.count - 1
      };
    }
    default: {
      return state;
    }
  }
}
