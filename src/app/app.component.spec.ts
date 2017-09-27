import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {RecepiesComponent} from './recepies/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecepiesItemComponent} from './recepies/recepies-list/recipes-item/recipes-item.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {RecepiesListComponent} from './recepies/recepies-list/recipes-list.component';
import {Recipe} from './recepies/recipe.model';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, HeaderComponent, RecepiesComponent, ShoppingListComponent,
        RecepiesItemComponent, RecepiesListComponent, ShoppingEditComponent, Recipe
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!!');
  }));
});
