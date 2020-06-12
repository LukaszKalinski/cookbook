import { Component, OnInit,  } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {
  faShoppingCart,
  faCalculator,
  faSyncAlt,
  faCartArrowDown,
  faEdit,
  faSave,
  faTrash,
  faInbox
   } from '@fortawesome/free-solid-svg-icons';
import * as fromApp from '../../../store/app.reducer';
import { RecipeSingle } from 'src/app/classes/recipe-single.model';
import { RecipeNeeds } from 'src/app/classes/recipe-needs.model';
import { StringsService } from '../../../shared/strings';
import { Animations } from '../../../shared/animations';

@Component({
  selector: 'app-recipe-single-selected',
  templateUrl: './recipe-single-selected.component.html',
  styleUrls: ['./recipe-single-selected.component.sass'],
  animations: [
    Animations.appearWithOpacity,
  ]
})

export class RecipeSingleSelectedComponent implements OnInit {
  recipe: RecipeSingle;
  subscription: Subscription;
  isRecalculate = false;
  recalculatingFactorPortions: number;
  recalculatingFactorShape: number;
  recalculatingFactor: number;
  recalculatedNeeds: RecipeNeeds[];
  recalculatedNeedsString: string[];
  isShoppingListOpened = false;
  shoppingCartIcon = faShoppingCart;
  calculatorIcon = faCalculator;
  refreshIcon = faSyncAlt;
  saveShoppingListIcon = faCartArrowDown;
  editIcon = faEdit;
  saveIcon = faSave;
  deleteIcon = faTrash;
  moldIcon = faInbox;
  ingredientEditIndex = null;
  isManageByShape = false;
  isVesselCircle = false;
  vesselWidthOrR: number;
  vesselLengthOrR: number;

  recipeCalcVesselHeader = '';
  recipeCalcPortionsMsg = '';
  recipeCalcVesselMsg = '';
  recipeCalcOpenSLMsg = '';
  recipeCalcRefreshSLMsg = '';
  recipeCalcSendToCartMsg = '';

  radiusName = '';
  widthName = '';
  lengthName = '';
  recipeVessel = '';
  yourVessel = '';
  ingredientsName = '';
  portionsName = '';
  shoppingListName = '';

  constructor(
    private store: Store<fromApp.AppState>,
    private stringsService: StringsService,
  ) { }

  ngOnInit(): void {
    this.subscriptionsOnInit();
    this.calculateShapeFactor();
  }

  subscriptionsOnInit() {
    this.setStrings();
    this.subscription = this.store.select('recipes').subscribe(data => {
      this.recipe = {...data.selectedRecipeSingle};
      this.recalculatedNeeds = [...data.selectedRecipeSingle.needs];
      this.stringifyNeeds(this.recalculatedNeeds);
      this.vesselWidthOrR = this.recipe.vessel[0].widthOrR;
      this.vesselLengthOrR = this.recipe.vessel[0].lengthOrR;
    });
    this.recalculatingFactorPortions = this.recipe.portions;
  }

  setStrings() {
    this.recipeCalcVesselHeader = this.stringsService.strings.get('recipeCalcVesselHeader');
    this.recipeCalcPortionsMsg = this.stringsService.strings.get('recipeCalcPortionsMsg');
    this.recipeCalcVesselMsg = this.stringsService.strings.get('recipeCalcVesselMsg');
    this.recipeCalcOpenSLMsg = this.stringsService.strings.get('recipeCalcOpenSLMsg');
    this.recipeCalcRefreshSLMsg = this.stringsService.strings.get('recipeCalcRefreshSLMsg');
    this.recipeCalcSendToCartMsg = this.stringsService.strings.get('recipeCalcSendToCartMsg');
    this.radiusName = this.stringsService.strings.get('radiusName');
    this.widthName = this.stringsService.strings.get('widthName');
    this.lengthName = this.stringsService.strings.get('lengthName');
    this.recipeVessel = this.stringsService.strings.get('recipeVessel');
    this.yourVessel = this.stringsService.strings.get('yourVessel');
    this.ingredientsName = this.stringsService.strings.get('ingredientsName');
    this.portionsName = this.stringsService.strings.get('portionsName');
    this.shoppingListName = this.stringsService.strings.get('shoppingListName');
  }

  onRecalculate() {
    this.isRecalculate = !this.isRecalculate;
    if (this.isRecalculate) {
      this.refreshToShoppingList();
      this.isManageByShape = false;
    }
  }

  enableShapeFactor() {
    this.isManageByShape = !this.isManageByShape;
    this.calculateShapeFactor();
    if (this.isManageByShape) {
      this.recalculatingFactorPortions = this.recipe.portions;
      this.isRecalculate = false;
    }
    this.refreshToShoppingList();
  }

  calculateShapeFactor() {
    let result = 1;
    if (this.isManageByShape) {
      const recipeVessel = this.recipe.isVesselCircle ?
        3.14 * Math.pow(this.recipe.vessel[0].widthOrR, 2) : this.recipe.vessel[0].widthOrR * this.recipe.vessel[0].lengthOrR;
      const chosenVessel = this.isVesselCircle ?
      3.14 * Math.pow(this.vesselWidthOrR, 2) : this.vesselWidthOrR * this.vesselLengthOrR;
      result = chosenVessel / recipeVessel;
    }
    this.recalculatingFactorShape = result;
    this.refreshToShoppingList();
    console.log(result);
  }

  calculateFactor() {
    if (this.isRecalculate) {
      this.recalculatingFactor = this.recalculatingFactorPortions;
    } else if (this.isManageByShape) {
      this.recalculatingFactor = this.recalculatingFactorShape * this.recalculatingFactorPortions;
    } else {
      this.recalculatingFactor = this.recipe.portions;
    }
  }

  stringifyNeeds(needs: RecipeNeeds[]) {
    const newArr = [];
    needs.forEach((data, index) => {
      const newStr = data.quantity.toFixed(2) + ' ' + data.unit + ' - ' + data.name;
      newArr.push(newStr);
    });
    this.recalculatedNeedsString = newArr;
  }

  shoppingListDeleteItem(index: number) {
    this.recalculatedNeedsString.splice(index, 1);
    if (this.recalculatedNeedsString.length === 0) {
      this.isShoppingListOpened = false;
    }
    this.ingredientEditIndex = null;
  }

  shoppingListSaveMode(need: string) {
    this.recalculatedNeedsString[this.ingredientEditIndex] = need;
    this.ingredientEditIndex = null;
  }

  shoppingListEditMode(index: number) {
    this.ingredientEditIndex = index;
  }

  calculateNeeds() {
    this.calculateFactor();
    const oldRecipe: RecipeSingle = JSON.parse(JSON.stringify(this.recipe));
    const portions = oldRecipe.portions;
    const ingredients = oldRecipe.needs;
    ingredients.forEach((data, index) => {
      data.quantity /= portions;
      data.quantity *=  this.recalculatingFactor;
      data.quantity = +data.quantity.toFixed(2);
    });
    return ingredients;
  }

  openToShoppingList() {
    this.isShoppingListOpened = true;
    this.recalculatedNeeds = this.calculateNeeds();
    this.stringifyNeeds(this.recalculatedNeeds);
  }

  refreshToShoppingList() {
    this.recalculatedNeeds = this.calculateNeeds();
    this.stringifyNeeds(this.recalculatedNeeds);
  }

  saveShoppingList() {
    const arrToSend = [...this.recalculatedNeedsString];
    arrToSend.unshift(this.recipe.name);
  }
}
