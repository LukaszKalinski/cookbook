import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  faBars
   } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import * as HeaderActions from '../store/header.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-logo',
  templateUrl: './menu-logo.component.html',
  styleUrls: ['./menu-logo.component.sass']
})
export class MenuLogoComponent implements OnInit, OnDestroy {
  menuIcon = faBars;
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
    });
  }

  onClickMenu() {
    const result = !this.isMenuTriggered;
    this.store.dispatch(new HeaderActions.TriggerMenu(result));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
