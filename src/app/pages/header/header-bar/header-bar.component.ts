import { Component, OnInit } from '@angular/core';
import { Animations} from '../../../shared/animations';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.sass'],
  animations: [
    Animations.headerscrolling,
  ]
})
export class HeaderBarComponent implements OnInit {
  isWindowScrolled = false;

  constructor() { }

  ngOnInit(): void {
  }

  onScroll() {
    this.isWindowScrolled = window.scrollY > 0 ? true : false;
    console.log(this.isWindowScrolled);
    console.log(window.scrollY);
  }

}
