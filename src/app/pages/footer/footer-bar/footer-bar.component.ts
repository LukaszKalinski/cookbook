import { Component, OnInit } from '@angular/core';
import { Animations} from '../../../shared/animations';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.sass'],
  animations: [
    Animations.footerheight,
  ]
})
export class FooterBarComponent implements OnInit {
  isWindowScrolledBottom = false;
  constructor() { }

  ngOnInit(): void {
  }

  onScroll() {
    this.isWindowScrolledBottom = (window.innerHeight + window.pageYOffset) >= document.body.scrollHeight ? true : false;
  }
}
