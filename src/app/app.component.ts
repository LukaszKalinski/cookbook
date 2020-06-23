import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import { Subscription } from 'rxjs';
import { Animations} from '../app/shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    Animations.triggerMenu,
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'cookbook';
  isMenuTriggered = false;
  isLogged = false;
  subscription: Subscription;
  subscriptionTwo: Subscription;
  subscriptionThree: Subscription;
  selectedRecipeType: string;

  constructor(
    private store: Store<fromApp.AppState>,
  ) { }

  ngOnInit() {
    this.subscription = this.store.select('header').subscribe(data => {
      this.isMenuTriggered = data.isMenuTriggered;
    });
    this.subscriptionTwo = this.store.select('user').subscribe(data => {
      this.isLogged = data.isLogged;
    });
    this.subscriptionThree = this.store.select('recipes').subscribe(data => {
      this.selectedRecipeType = data.selectedRecipeType;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionTwo.unsubscribe();
    this.subscriptionThree.unsubscribe();
  }
}
