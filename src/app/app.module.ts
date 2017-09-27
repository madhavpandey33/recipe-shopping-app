import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesComponent } from './recepies/recipes.component';
import { RecipesListComponent } from './recepies/recepies-list/recipes-list.component';
import { RecipesDetailsComponent } from './recepies/recipes-details/recipes-details.component';
import { RecipesItemComponent } from './recepies/recepies-list/recipes-item/recipes-item.component';
import {DropDownDirective} from './shared/dropdown.directive';
import {AppRoutingModule} from './app-routing.module';
import { RecipeStartComponent } from './recepies/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recepies/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailsComponent,
    RecipesItemComponent,
    DropDownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
