import * as RecipeActions from './recipe.actions';
import { RecipeSingle } from 'src/app/classes/recipe-single.model';
import { RecipeType } from 'src/app/classes/recipe-type.model';

export interface State {
  recipesType: RecipeType[];
  recipes: RecipeSingle[];
  editedRecipe: RecipeSingle;
  editerRecipeIndex: number;
}

const initialState = {
  recipesType:
  [
    // tslint:disable-next-line: max-line-length
    new RecipeType('First Type', 'Short description', 'https://i.pinimg.com/600x315/8a/e4/cb/8ae4cb19758c97b685ad10a30a5c8ca4.jpg'),
    // tslint:disable-next-line: max-line-length
    new RecipeType('Second Type', 'Short description', 'https://i.pinimg.com/600x315/8a/e4/cb/8ae4cb19758c97b685ad10a30a5c8ca4.jpg')
  ],
  recipes: [],
  editedRecipe: null,
  editerRecipeIndex: -1
};

export function recipeReducer(state: State = initialState, action: RecipeActions.RecipeActions) {
  switch (action.type) {
    case 'ADD_RECIPE':
      return {
        ...state,
        recipes: [...state.recipes, action.payload]};
    default:
      return state;
  }
}
