import { Component, OnInit, Input  } from '@angular/core';
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
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.sass']
})
export class EditRecipeComponent implements OnInit {
  isEditMode = false;
  @Input() recipe: RecipeSingle;
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

  constructor() { }

  ngOnInit(): void {
    console.log(this.recipe);
  }

}
