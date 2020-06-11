export class RecipeSingle {
  constructor(
    public name: string,
    public type: string,
    public status: string,
    public imgUrls: string[],
    public descriptions: string[],
    public portions: number,
    public isVesselCircle: boolean = false,
    public vessel: {widthOrR: number, lengthOrR: number, height: number},
    public needs: {name: string, quantity: number, unit: string}[],
    public publisher: string,
    public publishedDate: number,
    public likes: number,
  ) {}
}
