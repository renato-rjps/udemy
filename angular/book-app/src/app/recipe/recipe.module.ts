import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeComponent } from './recipe.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RouterModule } from '@angular/router';
import { RecipeRoutingModule } from './recipe-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeStartComponent,
    RecipeComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RecipeRoutingModule
  ]
})
export class RecipeModule { }
