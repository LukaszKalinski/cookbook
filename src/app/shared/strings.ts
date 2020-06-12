export class StringsService {
  strings = englishStrings;

  changeLang(name: string) {
    console.log('should change language to: ' + name);
    switch (name) {
      case 'pl':
        this.strings = polishStrings;
        console.log('pl');
        break;
      default:
        this.strings = englishStrings;
        console.log('default');
        break;
    }
    console.log(this.strings);
  }
}

const englishStrings = new Map<string, string>();
const polishStrings = new Map<string, string>();

englishStrings.set('recipeCalcVesselHeader', 'Calculating for 1 pcs by chosen vassel');
englishStrings.set('recipeCalcPortionsMsg', 'Calculate portions');
englishStrings.set('recipeCalcVesselMsg', 'Calculate vessel');
englishStrings.set('recipeCalcOpenSLMsg', 'Open shopping list');
englishStrings.set('recipeCalcRefreshSLMsg', 'Refresh shopping list');
englishStrings.set('recipeCalcSendToCartMsg', 'Send to cart');
englishStrings.set('radiusName', 'radius');
englishStrings.set('widthName', 'width');
englishStrings.set('lengthName', 'length');
englishStrings.set('recipeVessel', 'Vessel in recipe');
englishStrings.set('yourVessel', 'Your vessel');
englishStrings.set('ingredientsName', 'Ingredients');
englishStrings.set('portionsName', 'portions');
englishStrings.set('shoppingListName', 'Shopping List');


polishStrings.set('recipeCalcVesselHeader', 'Przeliczenie dla wybranego naczynia');
polishStrings.set('recipeCalcPortionsMsg', 'Kalkuluj wg porcji');
polishStrings.set('recipeCalcVesselMsg', 'Kalkuluj wg naczynia');
polishStrings.set('recipeCalcOpenSLMsg', 'Otwórz listę zakupów');
polishStrings.set('recipeCalcRefreshSLMsg', 'Odswież listę zakupów');
polishStrings.set('recipeCalcSendToCartMsg', 'Wyślij zakupy');
polishStrings.set('radiusName', 'prom.');
polishStrings.set('widthName', 'szer.');
polishStrings.set('lengthName', 'dług.');
polishStrings.set('recipeVessel', 'Według przepisu');
polishStrings.set('yourVessel', 'Twoje naczynie');
polishStrings.set('ingredientsName', 'składniki');
polishStrings.set('portionsName', 'porcje');
polishStrings.set('shoppingListName', 'Lista zakupów');
