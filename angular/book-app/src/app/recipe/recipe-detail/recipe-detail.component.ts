import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe.model';
import { CanDeactivateComponent } from 'src/app/services/can-leave-component.guard';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit, CanDeactivateComponent {

  selectedRecipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private shoppingService: ShoppingService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.selectedRecipe = this.recipeService.getRecipeById(this.id);
    });
  }

  onDelete() {
    this.recipeService.removeRecipe(this.id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  sendToShoppingList() {
    this.shoppingService.saveIngredients(this.selectedRecipe.ingredients.slice());
    this.router.navigate(['shopping-list']);
  }

  canDeactivate() {
    //return confirm('Do you wont to leave this page?');
    return true;
  }

}
