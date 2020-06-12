import { Component, OnInit, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Animations} from '../animations';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.sass'],
  animations: [
    Animations.iconOnHover
  ]
})
export class IconComponent implements OnInit {
  @Input() icon: IconDefinition;
  @Input() hintMessage: string;
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
