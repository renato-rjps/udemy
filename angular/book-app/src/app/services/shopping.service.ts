import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Subject } from 'rxjs';
import { Ingredient } from '../model/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private ingredients: Ingredient[];
  selectedIngredient = new Subject<Ingredient>();

  constructor() {
    this.ingredients = [new Ingredient('Apple', 2), new Ingredient('Orange', 5)]
  }

  getIngredients() {
    return this.ingredients;
  }

  saveIngredient(ingredient: Ingredient) {
    return this.ingredients.push(ingredient);
  }

  removeIngredient(ingredient: Ingredient) {
    _.remove(this.ingredients, ingredient);
  }

  editIngredient(ingredient: Ingredient, updatedIngredient: Ingredient) {
    ingredient.name = updatedIngredient.name;
    ingredient.amount = updatedIngredient.amount;
  }

}
