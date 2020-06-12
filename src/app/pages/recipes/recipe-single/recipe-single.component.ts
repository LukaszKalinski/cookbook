import { Component, OnInit, Input } from '@angular/core';
import { RecipeSingle } from 'src/app/classes/recipe-single.model';
import { Animations} from '../../../shared/animations';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import * as RecipeActions from '../store/recipe.actions';

@Component({
  selector: 'app-recipe-single',
  templateUrl: './recipe-single.component.html',
  styleUrls: ['./recipe-single.component.sass'],
  animations: [
    Animations.biggerImageOnHover
  ]
})
export class RecipeSingleComponent implements OnInit {
  @Input() recipe: RecipeSingle;
  isHover = false;

  constructor(
    private store: Store<fromApp.AppState>,
  ) { }

  ngOnInit(): void {
  }

  onStartHover() {
    this.isHover = true;
  }

  onEndHover() {
    this.isHover = false;
  }

  onClick(recipe: RecipeSingle) {
    this.store.dispatch(new RecipeActions.ChangeRecipeSingle(recipe));
  }
}
