import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { Subject } from 'rxjs';
import { Ingredient } from '../model/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [];

  constructor() {
    const pizza = new Recipe('Pizza', 'Best Pizza Recipe ', 'https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717__340.jpg');
    const salad = new Recipe('Salad', 'Best Avocado Tomato Salad Recipe ', 'https://hips.hearstapps.com/hmg-prod/images/avocado-salad-1524672116.png');

    pizza.ingredients.push(new Ingredient('Cheese', 1));
    pizza.ingredients.push(new Ingredient('Tomato', 1));
    pizza.ingredients.push(new Ingredient('Onion', 1));

    salad.ingredients.push()
    salad.ingredients.push(new Ingredient('Tomato', 2));
    salad.ingredients.push(new Ingredient('Onion', 1));

    this.recipes.push(pizza);
    this.recipes.push(salad);
  }

  getRecipes() {
    return this.recipes;
  }

  saveRecipe(recipe: Recipe) {
    return this.recipes.push(recipe);
  }

  removeRecipe(recipe: Recipe) {
  }

  editRecipe(recipe: Recipe, updatedRecipe: Recipe) {
    //ingredient.name = updatedIngredient.name;
    //ingredient.amount = updatedIngredient.amount;
  }
  getRecipeById(id: number): Recipe {
    return this.recipes.find(recipe => recipe.id === id);
  }
}
