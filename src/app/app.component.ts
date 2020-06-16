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
  subscription: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
  ) { }

  ngOnInit() {
    this.subscription = this.store.select('header').subscribe(data => {
      this.isMenuTriggered = data.isMenuTriggered;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
