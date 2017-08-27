import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css']
})
export class RecepiesListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe('Samosa', 'Indian Snacks', 'https://thumb1.shutterstock.com/display_pic_with_logo/564163/255644446/stock-photo-samosa-on-a-plate-with-sauce-and-tomatoes-horizontal-view-from-above-rustic-style-255644446.jpg'),
    new Recipe('Kachori', 'Indian Snacks', 'http://media3.sailusfood.com/wp-content/uploads/2010/03/kachori-chaat.jpg')
];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.selectedRecipe.emit(recipe);
  }
}
