import { Component, OnInit, Input } from '@angular/core';
import { RecipeType } from 'src/app/classes/recipe-type.model';
import { Animations} from '../../../shared/animations';

@Component({
  selector: 'app-recipe-type',
  templateUrl: './recipe-type.component.html',
  styleUrls: ['./recipe-type.component.sass'],
  animations: [
    Animations.titlesWhiteToBlack,
    Animations.enterImage,
  ]
})

export class RecipeTypeComponent implements OnInit {
  @Input() recipeType: RecipeType;
  isHover = false;

  constructor() { }

  ngOnInit(): void {
  }

  onStartHover() {
    console.log('startHover');
    this.isHover = true;
  }

  onEndHover() {
    console.log('endHover');
    this.isHover = false;
  }
}
