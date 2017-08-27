import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';
import {ShoppingListService} from '../shopping-list/shopping.list.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  providers: [RecipeService, ShoppingListService]
})
export class RecepiesComponent implements OnInit {
  recipeSelected : Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.recipeSelected = recipe;
        }
    );
  }

}
