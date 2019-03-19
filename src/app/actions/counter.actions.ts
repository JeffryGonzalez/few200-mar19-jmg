import { Action } from '@ngrx/store';

// "Action Creators"

export const INCREMENT = '[counter] increment';
export class CountIncremented implements Action {
  readonly type = INCREMENT;
  constructor() { }
}

export const DECREMENT = '[counter] decrement';
export class CountDecremented implements Action {
  readonly type = DECREMENT;
  constructor() { }
}

export const RESET = '[counter] reset';
export class ResetCounter implements Action {
  readonly type = RESET;
  constructor() { }
}

export const COUNT_BY_SET = '[counter] Count by Set';
export class SetCountBy implements Action {
  readonly type = COUNT_BY_SET;
  constructor(public by: number) { }
}


export type All =
  CountIncremented
  | CountDecremented
  | ResetCounter
  | SetCountBy;

  // Discriminated Unions

