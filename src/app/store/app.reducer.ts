import { ActionReducerMap } from '@ngrx/store';
import * as fromRecipes from '../pages/recipes/store/recipe.reducer';
import * as fromHeader from '../pages/header/store/header.reducer';
import * as fromUser from '../pages/user-page/store/user.reducer';

export interface AppState {
  recipes: fromRecipes.State;
  header: fromHeader.State;
  user: fromUser.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  recipes: fromRecipes.recipeReducer,
  header: fromHeader.headerReducer,
  user: fromUser.userReducer,
};
