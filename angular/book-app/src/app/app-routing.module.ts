import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'recipe', loadChildren: './recipe/recipe.module#RecipeModule' },
  { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule' },
  { path: '**', redirectTo: '/recipe', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
