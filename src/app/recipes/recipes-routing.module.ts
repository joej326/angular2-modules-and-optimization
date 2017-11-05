import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from 'app/recipes/recipes.component';
import { RecipeStartComponent } from 'app/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from 'app/recipes/recipe-edit/recipe-edit.component';
import { AuthGuard } from 'app/auth/auth-guard.service';
import { RecipeDetailComponent } from 'app/recipes/recipe-detail/recipe-detail.component';


const recipesRoutes: Routes = [
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
  ] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(recipesRoutes)      //use for child for any routes that are NOT the app's main routes
  ],
  exports: [
    RouterModule        //we export RouterModule whenever we want to export routes (the const routes above)
  ],
  declarations: []
})
export class RecipesRoutingModule { }
