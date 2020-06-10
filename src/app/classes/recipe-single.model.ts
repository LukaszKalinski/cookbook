export class RecipeSingle {
  constructor(
    public name: string,
    public type: string,
    public imgUrls: string[],
    public descriptions: string[],
    public needs: {quantity: number, unit: string}[]
  ) {}
}
