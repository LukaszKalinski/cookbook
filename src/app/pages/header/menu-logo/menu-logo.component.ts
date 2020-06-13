import { Component, OnInit } from '@angular/core';
import {
  faBars
   } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-logo',
  templateUrl: './menu-logo.component.html',
  styleUrls: ['./menu-logo.component.sass']
})
export class MenuLogoComponent implements OnInit {
  menuIcon = faBars;

  constructor() { }

  ngOnInit(): void {
  }

}
