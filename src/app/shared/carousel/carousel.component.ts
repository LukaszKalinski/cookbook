import { Component, OnInit, Input } from '@angular/core';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faCircle
   } from '@fortawesome/free-solid-svg-icons';
import { Animations } from '../animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
  animations: [
    Animations.carousel,
  ]
})
export class CarouselComponent implements OnInit {
  @Input() arr: any[];
  leftIndex = null;
  rightIndex = null;
  selectedIndex = 0;
  rightIcon = faChevronCircleRight;
  leftIcon = faChevronCircleLeft;
  circleIcon = faCircle;
  selectedItemIndex = null;

  constructor() { }

  ngOnInit(): void {
    console.log(this.arr);
    this.checkIndexes(this.selectedIndex);
  }

  selectRecipe(num: number) {
    console.log('selected ' + num);
    this.selectedIndex = num;
    this.checkIndexes(num);
  }

  moveCarousel(direction: string) {
    let newIndex = this.selectedIndex;
    console.log(direction);
    switch (direction) {
      case 'right':
        newIndex += 1;
        break;
      case 'left':
        newIndex -= 1;
        break;
      default:
        break;
    }
    this.checkIndexes(newIndex);
  }

  checkIndexes(num: number) {
    this.selectedIndex = this.checkIndex(num);
    console.log('new index: ' + this.selectedIndex);
    this.leftIndex = this.checkIndex(this.selectedIndex - 1);
    this.rightIndex = this.checkIndex(this.selectedIndex + 1);
  }

  checkIndex(num: number) {
    const max = this.arr.length - 1;
    let result = num;
    if (num > max) {
      result = 0;
    } else if (num < 0) {
      result = max;
    } else {
      result = num;
    }
    return result;
  }

  editItem(num: number) {
    console.log(num);
    this.selectedItemIndex = num;
  }
}
