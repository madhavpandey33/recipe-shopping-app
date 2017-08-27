import {Component, ElementRef,  OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping.list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;


  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  addItems(){
    const inputName = this.nameInputRef.nativeElement.value;
    const inputAmount = this.amountInputRef.nativeElement.value;
    const newIngredient =  new Ingredient(inputName, inputAmount);
    this.slService.addIngredient(newIngredient);
  }
}
