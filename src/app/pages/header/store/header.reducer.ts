import * as HeaderActions from './header.actions';

export interface State {
  isMenuTriggered: boolean;
}

const initialState: State = {
  isMenuTriggered: false,
};

export function headerReducer(state: State = initialState, action: HeaderActions.HeaderActions) {
  switch (action.type) {
    case 'TRIGGER_MENU':
      return {
        ...state,
        isMenuTriggered: action.payload};
    default:
      return state;
  }
}
