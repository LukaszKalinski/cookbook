import { Action } from '@ngrx/store';
import { RecipeSingle } from 'src/app/classes/recipe-single.model';

export const ADD_RECIPE = 'ADD_RECIPE';

export class AddRecipe implements Action {
  readonly type = ADD_RECIPE;
  constructor(public payload: RecipeSingle) {}
}

export type RecipeActions = AddRecipe;
