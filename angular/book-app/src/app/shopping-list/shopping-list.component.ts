import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];
  selectedIngredient: Ingredient;


  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
  }

  onClick(ingredient: Ingredient) {
    this.selectedIngredient = ingredient;
    this.shoppingService.selectedIngredient.next(ingredient);
  }
}
