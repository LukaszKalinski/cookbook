import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../store/app.reducer';
import * as HeaderActions from '../../store/header.actions';
import * as UserActions from '../../../user-page/store/user.actions';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.sass']
})
export class MenuItemComponent implements OnInit {
  @Input() menu: {name: string, url: string};

  constructor(
    private store: Store<fromApp.AppState>,
  ) { }

  ngOnInit(): void {
  }

  openPosition(url: string) {
    console.log(url);
    this.store.dispatch(new HeaderActions.TriggerMenu(false));
    if (url === '#user') {
      this.store.dispatch(new UserActions.LoginUser(true));
    }
  }

}
