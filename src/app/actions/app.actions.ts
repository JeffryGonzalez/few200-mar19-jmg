import { Action } from '@ngrx/store';

export const APP_START = '[app] start';
export class ApplicationStarted implements Action {
  readonly type = APP_START;
  constructor() { }
}


export type All = ApplicationStarted;
