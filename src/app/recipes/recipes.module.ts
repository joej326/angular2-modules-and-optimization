import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from 'app/recipes/recipe-start/recipe-start.component';
import { RecipeListComponent } from 'app/recipes/recipe-list/recipe-list.component';
import { RecipeEditComponent } from 'app/recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from 'app/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from 'app/recipes/recipe-list/recipe-item/recipe-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from 'app/recipes/recipes-routing.module';
import { SharedModule } from 'app/shared/shared.module';


// 2) RECIPE MODULE HANDLES EVERYTHING RECIPE-RELATED, SO THE RECIPE ROUTING MODULE IS IMPORTED

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ],
  declarations: [
    RecipesComponent,
    RecipeStartComponent,   // services are the ONLY thing that can be declared in multiple modules.
    RecipeListComponent,    // anything else (directives, components etc) in only one
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ]
})
export class RecipesModule { 

  





  me(){
    return 'you';
  }


  object = {hello: 'there'}
}
