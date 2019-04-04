import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];
  selectedIngredient: Ingredient;

  constructor() { }

  ngOnInit() {
    this.ingredients.push(new Ingredient('Apple', 2));
    this.ingredients.push(new Ingredient('Orange', 5));
  }

  onCreateIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  onClick(ingredient: Ingredient) {
    console.log(ingredient);
    this.selectedIngredient = ingredient;
  }

  onRemove(ingredient: Ingredient) {
    _.remove(this.ingredients, ingredient);
  }

}
