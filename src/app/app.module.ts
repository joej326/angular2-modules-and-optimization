import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { RecipesModule } from 'app/recipes/recipes.module';
import { TestDirective } from './test.directive';
import { SharedModule } from 'app/shared/shared.module';
import { CoreModule } from 'app/core/core.module';

// a module created by YOU is called a "feature module"

// 3) RecipesModule is imported below. This was the final step.

// RECAP: we made a recipe module for everything recipe-related. 
// We then made a RecipeModule with recipe related routes which were eported with RouterModule
// and imported into the RecipeModule.
// Lastly, we imported the RecipeModule into the main AppModule and we're good to go!


//NOTE: in a module's export array, DO NOT export a feature module so that another module
// can use that feature module. This is a common gotchya.

//NOTE: when using lazy loading, you NEED to have a .forChild in that lazy-loaded module,
// or have have that module's routing module (eg. RecipeRoutingModule) imported into it

// Create a SharedModule with the components, directives, and pipes that you use everywhere in your app. This module should consist entirely of declarations, most of them exported.
// The SharedModule may re-export other widget modules, such as CommonModule, FormsModule, and modules with the UI controls that you use most widely.
// The SharedModule should not have providers for reasons explained previously. Nor should any of its imported or re-exported modules have providers. If you deviate from this guideline, know what you're doing and why.
// Import the SharedModule in your feature modules, both those loaded when the app starts and those you lazy load later.
// CoreModule

// Create a CoreModule with providers for the singleton services you load when the application starts.
// Import CoreModule in the root AppModule only. Never import CoreModule in any other module.
// Consider making CoreModule a pure services module with no declarations.

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    SignupComponent,
    SigninComponent,
    TestDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, //RecipesModule was taken out for lazy-loading. Anything that's in the imports is
    HttpModule,          // eagerly-loaded
    AppRoutingModule,
    CoreModule,
    //RecipesModule,          inject other modules into the the "imports" array
    SharedModule           //The whole reason we made a SharedModule is so that we can use our DropdownDirective
  ],                       // in our AppModule AND our RecipesModule. So we import it here AND in our RecipesModule.


                //OPTIONAL: We can move ALL of the providers into our core module
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
