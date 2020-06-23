import * as HeaderActions from './header.actions';

export interface State {
  isMenuTriggered: boolean;
  menu: {name: string, url: string}[];
}

const initialState: State = {
  isMenuTriggered: false,
  menu: [
    {name: 'All Recipes', url: '#recipes'},
    {name: 'User', url: '#user'},
  ],
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
