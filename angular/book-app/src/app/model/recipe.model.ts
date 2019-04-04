import { Ingredient } from './ingredient.model';

export class Recipe {

  public id: number = Math.floor(Math.random() * Math.floor(10000));

  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public ingredients: Ingredient[] = []
  ) { }

}

