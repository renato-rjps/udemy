import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Ingredient } from 'src/app/model/ingredient.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild(NgForm) form: NgForm;

  private selectedIngredient: Ingredient;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.shoppingService.selectedIngredient.subscribe(index => {
      this.selectedIngredient = this.shoppingService.getIngredients()[index];
      this.form.setValue({ name: this.selectedIngredient.name, amount: this.selectedIngredient.amount });
    });
  }

  onSubmit() {
    const name: string = this.form.value.name;
    const amount: number = this.form.value.amount;

    if (this.selectedIngredient) {
      this.shoppingService.editIngredient(this.selectedIngredient, new Ingredient(name, amount));
      this.cancel();
      return;
    }

    this.shoppingService.saveIngredient(new Ingredient(name, amount));
    this.cancel();
  }

  onRemove() {
    this.shoppingService.removeIngredient(this.selectedIngredient);
    this.cancel();
  }

  cancel() {
    this.selectedIngredient = null;
    this.form.reset();
  }

}
