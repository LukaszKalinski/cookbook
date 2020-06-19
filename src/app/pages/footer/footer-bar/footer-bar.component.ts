import { Component, OnInit } from '@angular/core';
import { Animations} from '../../../shared/animations';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faTwitter,
  faGoogle,
   } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.sass'],
  animations: [
    Animations.footerheight,
    Animations.enterIconsRow,
  ]
})
export class FooterBarComponent implements OnInit {
  isWindowScrolledBottom = false;
  iconMenu: {icon: IconDefinition, url: string}[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setIconsMenu();
  }

  onScroll() {
    this.isWindowScrolledBottom = (window.innerHeight + window.pageYOffset) >= document.body.scrollHeight ? true : false;
  }

  setIconsMenu() {
    this.iconMenu.push({icon: faFacebook, url: 'https://www.facebook.com/'});
    this.iconMenu.push({icon: faTwitter, url: 'https://www.twitter.com/'});
    this.iconMenu.push({icon: faGoogle, url: 'https://www.google.com/'});
  }
}
