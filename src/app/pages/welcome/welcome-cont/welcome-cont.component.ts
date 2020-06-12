import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromApp from '../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Animations} from '../../../shared/animations';

@Component({
  selector: 'app-welcome-cont',
  templateUrl: './welcome-cont.component.html',
  styleUrls: ['./welcome-cont.component.sass'],
  animations: [
    Animations.setheighttozero
  ]
})

export class WelcomeContComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  isSelectedType = false;

  constructor(
    private store: Store<fromApp.AppState>,
  ) { }

  ngOnInit(): void {
    this.subscriptionsOnInit();
  }

  subscriptionsOnInit() {
    this.subscription = this.store.select('recipes').subscribe(data => {
      this.isSelectedType = data.selectedRecipeType ? true : false;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
