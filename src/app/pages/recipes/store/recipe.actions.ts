import { Action } from '@ngrx/store';
import { RecipeSingle } from 'src/app/classes/recipe-single.model';

export const ADD_RECIPE = 'ADD_RECIPE';
export const CHANGE_RECIPETYPE = 'CHANGE_RECIPETYPE';
export const CHANGE_RECIPESINGLE = 'CHANGE_RECIPESINGLE';

export class AddRecipe implements Action {
  readonly type = ADD_RECIPE;
  constructor(public payload: RecipeSingle) {}
}

export class ChangeRecipeType implements Action {
  readonly type = CHANGE_RECIPETYPE;
  constructor(public payload: string) {}
}

export class ChangeRecipeSingle implements Action {
  readonly type = CHANGE_RECIPESINGLE;
  constructor(public payload: RecipeSingle) {}
}

export type RecipeActions = AddRecipe | ChangeRecipeType | ChangeRecipeSingle;
