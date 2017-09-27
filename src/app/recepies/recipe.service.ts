import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping.list.service';

@Injectable()
export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Samosa',
      'Indian Snacks','https://thumb1.shutterstock.com/display_pic_with_logo/564163/255644446/stock-photo-samosa-on-a-plate-with-sauce-and-tomatoes-horizontal-view-from-above-rustic-style-255644446.jpg',
      [
        new Ingredient('Flour', 100),
        new Ingredient('Potatoes', 11)
      ]),
    new Recipe('Kachori',
      'Indian Snacks', 'http://media3.sailusfood.com/wp-content/uploads/2010/03/kachori-chaat.jpg',
      [
        new Ingredient('Flour', 10),
        new Ingredient('Spices', 11)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(index: number){
    return this.recipes[index]
  }

  addIngridientToSL(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
