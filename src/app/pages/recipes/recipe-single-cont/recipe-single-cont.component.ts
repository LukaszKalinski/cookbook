import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as fromApp from '../../../store/app.reducer';
import { RecipeSingle } from 'src/app/classes/recipe-single.model';

@Component({
  selector: 'app-recipe-single-cont',
  templateUrl: './recipe-single-cont.component.html',
  styleUrls: ['./recipe-single-cont.component.sass']
})
export class RecipeSingleContComponent implements OnInit, OnDestroy {
  selectedRecipeType: string;
  subscription: Subscription;
  allRecipes: RecipeSingle[];
  typeRecipes: RecipeSingle[];

  constructor(
    private store: Store<fromApp.AppState>,
  ) { }

  ngOnInit(): void {
    this.subscriptionsOnInit();
  }

  subscriptionsOnInit() {
    this.subscription = this.store.select('recipes').subscribe(data => {
      this.selectedRecipeType = data.selectedRecipeType;
      this.allRecipes = data.recipes;
      this.setRecipes(this.selectedRecipeType);
    });
  }

  setRecipes(selectedRecipe: string) {
    this.typeRecipes = this.allRecipes.filter(data => data.type === this.selectedRecipeType);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
