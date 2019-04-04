import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor() { }

  ngOnInit() {
    this.recipes = [];
    this.recipes.push(new Recipe('Test 1', 'Simple Test', 'https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717__340.jpg'));
    this.recipes.push(new Recipe('Test 2', 'Simple Test', 'https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717__340.jpg'));
  }

}
