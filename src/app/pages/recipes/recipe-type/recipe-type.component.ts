import { Component, OnInit, Input, Output } from '@angular/core';
import { RecipeType } from 'src/app/classes/recipe-type.model';
import { Animations} from '../../../shared/animations';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import * as RecipeActions from '../store/recipe.actions';

@Component({
  selector: 'app-recipe-type',
  templateUrl: './recipe-type.component.html',
  styleUrls: ['./recipe-type.component.sass'],
  animations: [
    Animations.titlesWhiteToBlack,
    Animations.enterImage,
  ]
})

export class RecipeTypeComponent implements OnInit {
  @Input() recipeType: RecipeType;
  selectedRecipeType = null;
  isSelectedType = false;
  isHover = false;

  constructor(
    private store: Store<fromApp.AppState>,
  ) { }

  ngOnInit(): void {
    this.store.select('recipes').subscribe(data => {
      this.selectedRecipeType = data.selectedRecipeType;
    });
    this.isSelectedType = !!this.selectedRecipeType;
  }

  onStartHover() {
    this.isHover = true;
  }

  onEndHover() {
     if (!this.isSelectedType) { this.isHover = false; }
  }

  onClick(recipeType: string) {
    if (this.selectedRecipeType !== recipeType) {
      this.store.dispatch(new RecipeActions.ChangeRecipeType(recipeType));
    } else {
      this.store.dispatch(new RecipeActions.ChangeRecipeType(null));
    }
    this.isSelectedType = this.selectedRecipeType === this.recipeType.name ? true : false;
  }
}
