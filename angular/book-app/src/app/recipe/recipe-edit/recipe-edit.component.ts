import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  recipeForm: FormGroup;
  editMode = false;
  id = null;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.editMode = params.has('id');
      this.id = params.get('id') || null;
      this.initForm();
    });
  }

  private initForm() {
    let name = '';
    let imagePath = '';
    let description = '';
    const ingredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeById(this.id);
      name = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.description;
      if (recipe.ingredients) {
        recipe.ingredients
          .forEach(ingredient => {
            ingredients.push(new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            }));
          });
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      imagePath: new FormControl(imagePath, Validators.required),
      description: new FormControl(description, Validators.required),
      ingredients
    });
  }

  getControls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  onAddIngredient() {
    const ingredientsCtrl = (this.recipeForm.get('ingredients') as FormArray);

    ingredientsCtrl.push(new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }));
  }


  onRemoveIngredient(index: number) {
    const ingredientsCtrl = (this.recipeForm.get('ingredients') as FormArray);
    ingredientsCtrl.removeAt(index);
  }

  onSubmit() {
    if (this.editMode) {
      this.recipeService.editRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.saveRecipe(this.recipeForm.value);
    }

    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
