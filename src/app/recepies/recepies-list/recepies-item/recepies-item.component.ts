import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recepies-item',
  templateUrl: './recepies-item.component.html',
  styleUrls: ['./recepies-item.component.css']
})
export class RecepiesItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private  recipeService: RecipeService) { }

  ngOnInit() {
  }

  onRecipeSelection(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
