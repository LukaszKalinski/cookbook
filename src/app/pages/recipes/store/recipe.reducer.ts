import * as RecipeActions from './recipe.actions';
import { RecipeSingle } from 'src/app/classes/recipe-single.model';
import { RecipeType } from 'src/app/classes/recipe-type.model';
import { RecipeVessel } from 'src/app/classes/recipe-vessel.model';

export interface State {
  recipesType: RecipeType[];
  recipes: RecipeSingle[];
  editedRecipe: RecipeSingle;
  editedRecipeIndex: number;
  selectedRecipeType: string;
  selectedRecipeSingle: RecipeSingle;
}

const initialState: State = {
  recipesType:
    [
      // tslint:disable-next-line: max-line-length
      new RecipeType('First Type', 'Short description', 'https://i.pinimg.com/600x315/8a/e4/cb/8ae4cb19758c97b685ad10a30a5c8ca4.jpg'),
      // tslint:disable-next-line: max-line-length
      new RecipeType('Second Type', 'Short description', 'https://i.pinimg.com/600x315/8a/e4/cb/8ae4cb19758c97b685ad10a30a5c8ca4.jpg'),
      // tslint:disable-next-line: max-line-length
      new RecipeType('Third Type', 'Short description', 'https://i.pinimg.com/600x315/8a/e4/cb/8ae4cb19758c97b685ad10a30a5c8ca4.jpg'),
      // tslint:disable-next-line: max-line-length
      new RecipeType('Fourth Type', 'Short description', 'https://i.pinimg.com/600x315/8a/e4/cb/8ae4cb19758c97b685ad10a30a5c8ca4.jpg'),
      // tslint:disable-next-line: max-line-length
      new RecipeType('Fifth Type', 'Short description', 'https://i.pinimg.com/600x315/8a/e4/cb/8ae4cb19758c97b685ad10a30a5c8ca4.jpg'),
      // tslint:disable-next-line: max-line-length
      new RecipeType('Sixth Type', 'Short description', 'https://i.pinimg.com/600x315/8a/e4/cb/8ae4cb19758c97b685ad10a30a5c8ca4.jpg'),
    ],
  recipes:
    [
      new RecipeSingle(
        'Brownie z fasoli x1',
        'First Type',
        'Accepted',
        [
          'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/brownie_z_fasoli_01.jpg',
          'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/brownie_z_fasoli_02.jpg',

        ],
        [
          // tslint:disable-next-line: max-line-length
          'Fasolę odcedzić na sitku i przepłukać wodą, odsączyć. Włożyć do melaksera lub blendera i zacząć miksować z daktylami (bez pestek), kakao, miodem, syropem klonowym oraz proszkiem do pieczenia.',
          'Dodać jajka i zmiksować na gładką masę, pod koniec dodając olej kokosowy i banany. Dodać posiekane suszone śliwki i wymieszać.',
          // tslint:disable-next-line: max-line-length
          'Otrzymaną masę przelać do foremki o wymiarach dna ok. 20 x 23 cm i piec przez ok. 40 minut w 170 stopniach C. Wyjąć z piekarnika i ostudzić.',
          // tslint:disable-next-line: max-line-length
          'Ciasto opcjonalnie polać polewą czekoladową: do miseczki włożyć połamaną na kosteczki czekoladę, wlać mleko i roztopić w mikrofali lub kąpieli wodnej, wymieszać do uzyskania gładkiej konsystencji. Polać po cieście i udekorować pokrojonymi daktylami.'
        ],
        4,
        false,
        [new RecipeVessel(100, 100, 100)],
        [
          {name: 'Apple', quantity: 5, unit: 'kg'},
          {name: 'Apple', quantity: 5, unit: 'kg'},
          {name: 'Apple', quantity: 5, unit: 'kg'},
        ],
        'Me',
        new Date().getTime(),
        1000
      ),
      new RecipeSingle(
        'Brownie z fasoli x2',
        'First Type',
        'Accepted',
        [
          'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/brownie_z_fasoli_01.jpg',
          'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/brownie_z_fasoli_02.jpg',

        ],
        [
          // tslint:disable-next-line: max-line-length
          'Fasolę odcedzić na sitku i przepłukać wodą, odsączyć. Włożyć do melaksera lub blendera i zacząć miksować z daktylami (bez pestek), kakao, miodem, syropem klonowym oraz proszkiem do pieczenia.',
          'Dodać jajka i zmiksować na gładką masę, pod koniec dodając olej kokosowy i banany. Dodać posiekane suszone śliwki i wymieszać.',
          // tslint:disable-next-line: max-line-length
          'Otrzymaną masę przelać do foremki o wymiarach dna ok. 20 x 23 cm i piec przez ok. 40 minut w 170 stopniach C. Wyjąć z piekarnika i ostudzić.',
          // tslint:disable-next-line: max-line-length
          'Ciasto opcjonalnie polać polewą czekoladową: do miseczki włożyć połamaną na kosteczki czekoladę, wlać mleko i roztopić w mikrofali lub kąpieli wodnej, wymieszać do uzyskania gładkiej konsystencji. Polać po cieście i udekorować pokrojonymi daktylami.'
        ],
        4,
        false,
        [new RecipeVessel(100, 100, 100)],
        [
          {name: 'Apple', quantity: 5, unit: 'kg'},
          {name: 'Apple', quantity: 5, unit: 'kg'},
          {name: 'Apple', quantity: 5, unit: 'kg'},
        ],
        'Me',
        new Date().getTime(),
        1000
      ),
      new RecipeSingle(
        'Brownie z fasoli x2',
        'First Type',
        'Accepted',
        [
          'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/brownie_z_fasoli_01.jpg',
          'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/brownie_z_fasoli_02.jpg',

        ],
        [
          // tslint:disable-next-line: max-line-length
          'Fasolę odcedzić na sitku i przepłukać wodą, odsączyć. Włożyć do melaksera lub blendera i zacząć miksować z daktylami (bez pestek), kakao, miodem, syropem klonowym oraz proszkiem do pieczenia.',
          'Dodać jajka i zmiksować na gładką masę, pod koniec dodając olej kokosowy i banany. Dodać posiekane suszone śliwki i wymieszać.',
          // tslint:disable-next-line: max-line-length
          'Otrzymaną masę przelać do foremki o wymiarach dna ok. 20 x 23 cm i piec przez ok. 40 minut w 170 stopniach C. Wyjąć z piekarnika i ostudzić.',
          // tslint:disable-next-line: max-line-length
          'Ciasto opcjonalnie polać polewą czekoladową: do miseczki włożyć połamaną na kosteczki czekoladę, wlać mleko i roztopić w mikrofali lub kąpieli wodnej, wymieszać do uzyskania gładkiej konsystencji. Polać po cieście i udekorować pokrojonymi daktylami.'
        ],
        4,
        false,
        [new RecipeVessel(100, 100, 100)],
        [
          {name: 'Apple', quantity: 5, unit: 'kg'},
          {name: 'Apple', quantity: 5, unit: 'kg'},
          {name: 'Apple', quantity: 5, unit: 'kg'},
        ],
        'Me',
        new Date().getTime(),
        1000
      ),
      new RecipeSingle(
        'Brownie z fasoli x2',
        'First Type',
        'Accepted',
        [
          'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/brownie_z_fasoli_01.jpg',
          'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/brownie_z_fasoli_02.jpg',

        ],
        [
          // tslint:disable-next-line: max-line-length
          'Fasolę odcedzić na sitku i przepłukać wodą, odsączyć. Włożyć do melaksera lub blendera i zacząć miksować z daktylami (bez pestek), kakao, miodem, syropem klonowym oraz proszkiem do pieczenia.',
          'Dodać jajka i zmiksować na gładką masę, pod koniec dodając olej kokosowy i banany. Dodać posiekane suszone śliwki i wymieszać.',
          // tslint:disable-next-line: max-line-length
          'Otrzymaną masę przelać do foremki o wymiarach dna ok. 20 x 23 cm i piec przez ok. 40 minut w 170 stopniach C. Wyjąć z piekarnika i ostudzić.',
          // tslint:disable-next-line: max-line-length
          'Ciasto opcjonalnie polać polewą czekoladową: do miseczki włożyć połamaną na kosteczki czekoladę, wlać mleko i roztopić w mikrofali lub kąpieli wodnej, wymieszać do uzyskania gładkiej konsystencji. Polać po cieście i udekorować pokrojonymi daktylami.'
        ],
        4,
        false,
        [new RecipeVessel(100, 100, 100)],
        [
          {name: 'Apple', quantity: 5, unit: 'kg'},
          {name: 'Apple', quantity: 5, unit: 'kg'},
          {name: 'Apple', quantity: 5, unit: 'kg'},
        ],
        'Me',
        new Date().getTime(),
        1000
      ),
      new RecipeSingle(
        'Brownie z fasoli x2',
        'First Type',
        'Accepted',
        [
          'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/brownie_z_fasoli_01.jpg',
          'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/brownie_z_fasoli_02.jpg',

        ],
        [
          // tslint:disable-next-line: max-line-length
          'Fasolę odcedzić na sitku i przepłukać wodą, odsączyć. Włożyć do melaksera lub blendera i zacząć miksować z daktylami (bez pestek), kakao, miodem, syropem klonowym oraz proszkiem do pieczenia.',
          'Dodać jajka i zmiksować na gładką masę, pod koniec dodając olej kokosowy i banany. Dodać posiekane suszone śliwki i wymieszać.',
          // tslint:disable-next-line: max-line-length
          'Otrzymaną masę przelać do foremki o wymiarach dna ok. 20 x 23 cm i piec przez ok. 40 minut w 170 stopniach C. Wyjąć z piekarnika i ostudzić.',
          // tslint:disable-next-line: max-line-length
          'Ciasto opcjonalnie polać polewą czekoladową: do miseczki włożyć połamaną na kosteczki czekoladę, wlać mleko i roztopić w mikrofali lub kąpieli wodnej, wymieszać do uzyskania gładkiej konsystencji. Polać po cieście i udekorować pokrojonymi daktylami.'
        ],
        4,
        false,
        [new RecipeVessel(100, 100, 100)],
        [
          {name: 'Apple', quantity: 5, unit: 'kg'},
          {name: 'Apple', quantity: 5, unit: 'kg'},
          {name: 'Apple', quantity: 5, unit: 'kg'},
        ],
        'Me',
        new Date().getTime(),
        1000
      ),
      new RecipeSingle(
        'Brownie z fasoli x2',
        'First Type',
        'Accepted',
        [
          'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/brownie_z_fasoli_01.jpg',
          'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/brownie_z_fasoli_02.jpg',

        ],
        [
          // tslint:disable-next-line: max-line-length
          'Fasolę odcedzić na sitku i przepłukać wodą, odsączyć. Włożyć do melaksera lub blendera i zacząć miksować z daktylami (bez pestek), kakao, miodem, syropem klonowym oraz proszkiem do pieczenia.',
          'Dodać jajka i zmiksować na gładką masę, pod koniec dodając olej kokosowy i banany. Dodać posiekane suszone śliwki i wymieszać.',
          // tslint:disable-next-line: max-line-length
          'Otrzymaną masę przelać do foremki o wymiarach dna ok. 20 x 23 cm i piec przez ok. 40 minut w 170 stopniach C. Wyjąć z piekarnika i ostudzić.',
          // tslint:disable-next-line: max-line-length
          'Ciasto opcjonalnie polać polewą czekoladową: do miseczki włożyć połamaną na kosteczki czekoladę, wlać mleko i roztopić w mikrofali lub kąpieli wodnej, wymieszać do uzyskania gładkiej konsystencji. Polać po cieście i udekorować pokrojonymi daktylami.'
        ],
        4,
        false,
        [new RecipeVessel(100, 100, 100)],
        [
          {name: 'Apple', quantity: 5, unit: 'kg'},
          {name: 'Apple', quantity: 5, unit: 'kg'},
          {name: 'Apple', quantity: 5, unit: 'kg'},
        ],
        'Me',
        new Date().getTime(),
        1000
      ),
      new RecipeSingle(
        'Brownie z fasoli x2',
        'First Type',
        'Accepted',
        [
          'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/brownie_z_fasoli_01.jpg',
          'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/brownie_z_fasoli_02.jpg',

        ],
        [
          // tslint:disable-next-line: max-line-length
          'Fasolę odcedzić na sitku i przepłukać wodą, odsączyć. Włożyć do melaksera lub blendera i zacząć miksować z daktylami (bez pestek), kakao, miodem, syropem klonowym oraz proszkiem do pieczenia.',
          'Dodać jajka i zmiksować na gładką masę, pod koniec dodając olej kokosowy i banany. Dodać posiekane suszone śliwki i wymieszać.',
          // tslint:disable-next-line: max-line-length
          'Otrzymaną masę przelać do foremki o wymiarach dna ok. 20 x 23 cm i piec przez ok. 40 minut w 170 stopniach C. Wyjąć z piekarnika i ostudzić.',
          // tslint:disable-next-line: max-line-length
          'Ciasto opcjonalnie polać polewą czekoladową: do miseczki włożyć połamaną na kosteczki czekoladę, wlać mleko i roztopić w mikrofali lub kąpieli wodnej, wymieszać do uzyskania gładkiej konsystencji. Polać po cieście i udekorować pokrojonymi daktylami.'
        ],
        4,
        false,
        [new RecipeVessel(100, 100, 100)],
        [
          {name: 'Apple', quantity: 5, unit: 'kg'},
          {name: 'Apple', quantity: 5, unit: 'kg'},
          {name: 'Apple', quantity: 5, unit: 'kg'},
        ],
        'Me',
        new Date().getTime(),
        1000
      ),
      new RecipeSingle(
        'Brownie z fasoli x2',
        'First Type',
        'Accepted',
        [
          'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/brownie_z_fasoli_01.jpg',
          'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/brownie_z_fasoli_02.jpg',

        ],
        [
          // tslint:disable-next-line: max-line-length
          'Fasolę odcedzić na sitku i przepłukać wodą, odsączyć. Włożyć do melaksera lub blendera i zacząć miksować z daktylami (bez pestek), kakao, miodem, syropem klonowym oraz proszkiem do pieczenia.',
          'Dodać jajka i zmiksować na gładką masę, pod koniec dodając olej kokosowy i banany. Dodać posiekane suszone śliwki i wymieszać.',
          // tslint:disable-next-line: max-line-length
          'Otrzymaną masę przelać do foremki o wymiarach dna ok. 20 x 23 cm i piec przez ok. 40 minut w 170 stopniach C. Wyjąć z piekarnika i ostudzić.',
          // tslint:disable-next-line: max-line-length
          'Ciasto opcjonalnie polać polewą czekoladową: do miseczki włożyć połamaną na kosteczki czekoladę, wlać mleko i roztopić w mikrofali lub kąpieli wodnej, wymieszać do uzyskania gładkiej konsystencji. Polać po cieście i udekorować pokrojonymi daktylami.'
        ],
        4,
        false,
        [new RecipeVessel(100, 100, 100)],
        [
          {name: 'Apple', quantity: 5, unit: 'kg'},
          {name: 'Apple', quantity: 5, unit: 'kg'},
          {name: 'Apple', quantity: 5, unit: 'kg'},
        ],
        'Me',
        new Date().getTime(),
        1000
      ),
    ],
  editedRecipe: null,
  editedRecipeIndex: -1,
  selectedRecipeType: null,
  selectedRecipeSingle: null
};

export function recipeReducer(state: State = initialState, action: RecipeActions.RecipeActions) {
  switch (action.type) {
    case 'ADD_RECIPE':
      return {
        ...state,
        recipes: [...state.recipes, action.payload]};
    case 'CHANGE_RECIPETYPE':
      return {
        ...state,
        selectedRecipeType: action.payload};
    case 'CHANGE_RECIPESINGLE':
      return {
        ...state,
        selectedRecipeSingle: action.payload};
    default:
      return state;
  }
}
