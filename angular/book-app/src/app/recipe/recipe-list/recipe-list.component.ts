import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  private unsbscribeAll = new Subject();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService
      .recipesChanged
      .pipe(takeUntil(this.unsbscribeAll))
      .subscribe(recipes => this.recipes = recipes);
    this.recipeService.getRecipes();
  }

  ngOnDestroy() {
    this.unsbscribeAll.next();
    this.unsbscribeAll.complete();
  }
}
