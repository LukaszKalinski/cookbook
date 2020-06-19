import { Component, OnInit, OnDestroy } from '@angular/core';
import { Animations} from '../../../shared/animations';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';

@Component({
  selector: 'app-menu-fullpage',
  templateUrl: './menu-fullpage.component.html',
  styleUrls: ['./menu-fullpage.component.sass'],
  animations: [
    Animations.triggerMenu,
    Animations.entermenu
  ]
})
export class MenuFullpageComponent implements OnInit, OnDestroy {
  isMenuTriggered = false;
  isLoaded = false;
  subscription: Subscription;
  menu: {name: string, url: string}[];

  constructor(
    private store: Store<fromApp.AppState>,
  ) { }

  ngOnInit(): void {
    this.subscriptionsOnInit();
  }

  subscriptionsOnInit() {
    this.subscription = this.store.select('header').subscribe(data => {
      this.isMenuTriggered = data.isMenuTriggered;
      this.menu = data.menu;
      if (this.isMenuTriggered) {
        setTimeout(() => {
          this.isLoaded = true;
        }, 800);
      } else {
        this.isLoaded = false;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
