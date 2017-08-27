import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[] = [
    new Ingredient('Flour', 200),
    new Ingredient('Potatoes', 500)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredeint: Ingredient){
    this.ingredients.push(ingredeint);
  }
}
