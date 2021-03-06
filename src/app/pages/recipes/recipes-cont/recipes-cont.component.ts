import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeType } from 'src/app/classes/recipe-type.model';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';


import * as fromApp from '../../../store/app.reducer';

@Component({
  selector: 'app-recipes-cont',
  templateUrl: './recipes-cont.component.html',
  styleUrls: ['./recipes-cont.component.sass'],
})

export class RecipesContComponent implements OnInit, OnDestroy {
  allRecipeTypes: RecipeType[];
  subscription: Subscription;
  selectedRecipeType: string;

  constructor(
    private store: Store<fromApp.AppState>,
  ) { }

  ngOnInit(): void {
    this.subscriptionsOnInit();
  }

  subscriptionsOnInit() {
    this.subscription = this.store.select('recipes').subscribe(data => {
      this.allRecipeTypes = data.recipesType;
      this.selectedRecipeType = data.selectedRecipeType;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
