import { RecipeVessel } from './recipe-vessel.model';
import { RecipeNeeds } from './recipe-needs.model';

export class RecipeSingle {
  constructor(
    public name: string,
    public type: string,
    public status: string,
    public imgUrls: string[],
    public descriptions: string[],
    public portions: number,
    public isVesselCircle: boolean = false,
    public vessel: RecipeVessel[],
    public needs: RecipeNeeds[],
    public publisher: string,
    public publishedDate: number,
    public likes: number,
    public tags: string[] = null,
  ) {}
}
