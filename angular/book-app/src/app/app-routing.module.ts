import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { CanLeaveComponentGuard } from './services/can-leave-component.guard';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/recipe' },
  {
    path: 'recipe', component: RecipeComponent,
    children: [
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent, canDeactivate: [CanLeaveComponentGuard] },
      { path: ':id/edit', component: RecipeEditComponent }
    ]
  },
  {
    path: 'shopping-list', component: ShoppingListComponent,
    children: [
      { path: ':id', component: ShoppingListEditComponent }
    ]
  },
  { path: '**', redirectTo: '/recipe', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
