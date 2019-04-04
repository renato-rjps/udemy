import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
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

  @Output()
  createIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const name: string = this.name.nativeElement.value;
    const amount: number = this.amount.nativeElement.value;
    this.createIngredient.emit(new Ingredient(name, amount));
    this.form.nativeElement.reset();
  }

}
