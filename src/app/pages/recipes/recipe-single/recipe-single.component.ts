import { Component, OnInit, Input } from '@angular/core';
import { RecipeSingle } from 'src/app/classes/recipe-single.model';
import { Animations} from '../../../shared/animations';

@Component({
  selector: 'app-recipe-single',
  templateUrl: './recipe-single.component.html',
  styleUrls: ['./recipe-single.component.sass'],
  animations: [
    Animations.biggerImageOnHover
  ]
})
export class RecipeSingleComponent implements OnInit {
  @Input() recipe: RecipeSingle;
  isHover = false;

  constructor() { }

  ngOnInit(): void {
  }

  onStartHover() {
    this.isHover = true;
  }

  onEndHover() {
    this.isHover = false;
  }
}
