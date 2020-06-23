import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeSingle } from 'src/app/classes/recipe-single.model';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../store/app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-recipes',
  templateUrl: './user-recipes.component.html',
  styleUrls: ['./user-recipes.component.sass']
})
export class UserRecipesComponent implements OnInit, OnDestroy {
  myRecipes: RecipeSingle[] = [];
  subscription: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
  ) { }

  ngOnInit(): void {
    this.subscriptionsOnInit();
  }

  subscriptionsOnInit() {
    this.subscription = this.store.select('recipes').subscribe(data => {
      this.myRecipes = data.recipes;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
