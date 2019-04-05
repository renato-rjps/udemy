import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Ingredient } from 'src/app/model/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('name')
  name: ElementRef;

  @ViewChild('amount')
  amount: ElementRef;

  @ViewChild('ingredientForm')
  form: any;

  private selectedIngredient: Ingredient;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    /* this.shoppingService.selectedIngredient.subscribe(ingredient => {
      this.name.nativeElement.value = ingredient.name;
      this.amount.nativeElement.value = ingredient.amount;
      this.selectedIngredient = ingredient;
    }) */
  }

  onSubmit() {
    const name: string = this.name.nativeElement.value;
    const amount: number = this.amount.nativeElement.value;

    if (!name || !amount) {
      alert('Todos os campos devem ser informados');
      return;
    }

    if (this.selectedIngredient) {
      this.shoppingService.editIngredient(this.selectedIngredient, new Ingredient(name, amount));
      this.selectedIngredient = null;
    } else {
      this.shoppingService.saveIngredient(new Ingredient(name, amount));
    }

    this.form.nativeElement.reset();
  }

  onRemove() {
    if (this.selectedIngredient) {
      this.shoppingService.removeIngredient(this.selectedIngredient);
      this.selectedIngredient = null;
    }
  }

}
