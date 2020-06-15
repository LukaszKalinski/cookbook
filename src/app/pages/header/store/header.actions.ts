import { Action } from '@ngrx/store';

export const TRIGGER_MENU = 'TRIGGER_MENU';

export class TriggerMenu implements Action {
  readonly type = TRIGGER_MENU;
  constructor(public payload: boolean) {}
}

export type HeaderActions = TriggerMenu;
