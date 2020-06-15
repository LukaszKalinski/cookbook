import { Component, OnInit, OnDestroy } from '@angular/core';
import { Animations} from '../../../shared/animations';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.sass'],
  animations: [
    Animations.headerscrolling,
  ]
})
export class HeaderBarComponent implements OnInit, OnDestroy {
  isWindowScrolled = false;
  isMenuTriggered = false;
  subscription: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
  ) { }

  ngOnInit(): void {
    this.subscriptionsOnInit();
  }

  subscriptionsOnInit() {
    this.subscription = this.store.select('header').subscribe(data => {
      this.isMenuTriggered = data.isMenuTriggered;
      if (data.isMenuTriggered) {
        this.isWindowScrolled = true;
      } else {
        this.onScroll();
      }
    });
  }

  onScroll() {
    if (!this.isMenuTriggered) {
      this.isWindowScrolled = window.scrollY > 0 ? true : false;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
