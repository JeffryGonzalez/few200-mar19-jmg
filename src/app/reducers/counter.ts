// import { Action } from '@ngrx/store';
import * as actions from '../actions/counter.actions';



export interface State {
  count: number;
  by: number;
}

const initialState: State = {
  count: 0,
  by: 1
};

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.COUNT_BY_SET: {
      return {
        count: state.count,
        by: action.by
      };
    }
    case actions.RESET: {
      return initialState;
    }
    case actions.INCREMENT: {
      return {
        count: state.count + state.by,
        by: state.by
      };
    }
    case actions.DECREMENT: {
      return {
        count: state.count - state.by,
        by: state.by
      };
    }
    default: {
      return state;
    }
  }
}
