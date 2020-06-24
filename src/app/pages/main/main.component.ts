import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { Subscription } from 'rxjs';
import { Animations} from '../../shared/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit, OnDestroy {
  isLogged = false;
  subscriptionTwo: Subscription;
  subscriptionThree: Subscription;
  selectedRecipeType: string;

  constructor(
    private store: Store<fromApp.AppState>,
  ) { }

  ngOnInit() {
    this.subscriptionTwo = this.store.select('user').subscribe(data => {
      this.isLogged = data.isLogged;
    });
    this.subscriptionThree = this.store.select('recipes').subscribe(data => {
      this.selectedRecipeType = data.selectedRecipeType;
    });
  }

  ngOnDestroy() {
    this.subscriptionTwo.unsubscribe();
    this.subscriptionThree.unsubscribe();
  }

}
