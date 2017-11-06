import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';
import { HomeComponent } from 'app/core/home/home.component';


// NOTE: nothing recipe-related is being imported in the @ngModule b/c this is simply the main app's routing
// module. We set up a recipe module for everything recipe-related.

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'}, //lazy-loading: use path then # then module name
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
