import { Component, OnInit } from '@angular/core';
import { RecipeSingle } from 'src/app/classes/recipe-single.model';
import { RecipeVessel } from 'src/app/classes/recipe-vessel.model';

@Component({
  selector: 'app-user-recipes',
  templateUrl: './user-recipes.component.html',
  styleUrls: ['./user-recipes.component.sass']
})
export class UserRecipesComponent implements OnInit {
  myRecipes: RecipeSingle[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes() {
    for (let i = 0; i < 5; i++) {
      this.myRecipes.push
      (new RecipeSingle(
        'Brownie z fasoli x1',
        'First Type',
        'Accepted',
        [
          'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/brownie_z_fasoli_01.jpg',
          'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/brownie_z_fasoli_02.jpg',

        ],
        [
          // tslint:disable-next-line: max-line-length
          'Fasolę odcedzić na sitku i przepłukać wodą, odsączyć. Włożyć do melaksera lub blendera i zacząć miksować z daktylami (bez pestek), kakao, miodem, syropem klonowym oraz proszkiem do pieczenia.',
          'Dodać jajka i zmiksować na gładką masę, pod koniec dodając olej kokosowy i banany. Dodać posiekane suszone śliwki i wymieszać.',
          // tslint:disable-next-line: max-line-length
          'Otrzymaną masę przelać do foremki o wymiarach dna ok. 20 x 23 cm i piec przez ok. 40 minut w 170 stopniach C. Wyjąć z piekarnika i ostudzić.',
          // tslint:disable-next-line: max-line-length
          'Ciasto opcjonalnie polać polewą czekoladową: do miseczki włożyć połamaną na kosteczki czekoladę, wlać mleko i roztopić w mikrofali lub kąpieli wodnej, wymieszać do uzyskania gładkiej konsystencji. Polać po cieście i udekorować pokrojonymi daktylami.'
        ],
        4,
        false,
        [new RecipeVessel(100, 100, 100)],
        [
          {name: 'Apple', quantity: 5, unit: 'kg'},
          {name: 'Apple', quantity: 5, unit: 'kg'},
          {name: 'Apple', quantity: 5, unit: 'kg'},
        ],
        'Me',
        new Date().getTime(),
        1000
      ),
    );
    }
  }

}
