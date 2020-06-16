import { Component, OnInit } from '@angular/core';
import {
  faSearch
   } from '@fortawesome/free-solid-svg-icons';
import { Animations } from '../../../shared/animations';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.sass'],
  animations: [
    Animations.setwidthtozero,
  ]
})
export class SearchboxComponent implements OnInit {
  isSearchBoxTriggered = false;
  searchIcon = faSearch;
  searchBoxValue = '';

  constructor() { }

  ngOnInit(): void {
  }

  onTriggerSearchBox() {
    this.isSearchBoxTriggered = !this.isSearchBoxTriggered;
    this.searchBoxValue = this.isSearchBoxTriggered ? this.searchBoxValue : '';
  }

}
