import {Component, ElementRef, EventEmitter, OnInit, ViewChild, Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();


  constructor() { }

  ngOnInit() {
  }

  addItems(){
    const inputName = this.nameInputRef.nativeElement.value;
    const inputAmount = this.amountInputRef.nativeElement.value;
    const newIngredient =  new Ingredient(inputName, inputAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
