import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {

  onIngredientChange = new EventEmitter<Ingredient[]>();

  ingredients : Ingredient[] = [
    new Ingredient('Flour', 200),
    new Ingredient('Potatoes', 500)
  ];

  getShoppingList(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.onIngredientChange.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    /*for(let ingredient of ingredients){
      this.ingredients.push(ingredient);
    }*/
    this.ingredients.push(...ingredients);
    this.onIngredientChange.emit(this.ingredients.slice());
  }
}
