import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent{
  @Output() onTabSelection = new EventEmitter<string>();

  selectTab(tabSelected: string){
    this.onTabSelection.emit(tabSelected);
  }
}
