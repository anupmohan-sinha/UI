import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test Recipe', ' This is simply a test',
     'https://images.all-free-download.com/images/graphiclarge/delicious_food_01_hd_pictures_167553.jpg'),
     new Recipe('A test Recipe', ' This is simply a test',
     'https://images.all-free-download.com/images/graphiclarge/delicious_food_05_hd_picture_167549.jpg'),
     new Recipe('A test Recipe', ' This is simply a test',
     'http://www.oneplatter.com/wp-content/uploads/2017/01/8-Most-Delicious-Food-Duos-of-All-Time-1-1050x600.jpg'),
     new Recipe('A test Recipe', ' This is simply a test',
     'http://www.oneplatter.com/wp-content/uploads/2017/01/peanut-butter-andjelly-1-768x512.jpg'),
     new Recipe('A test Recipe', ' This is simply a test',
     'http://www.oneplatter.com/wp-content/uploads/2017/01/pancake.jpg'),
     new Recipe('A test Recipe', ' This is simply a test',
     'http://www.oneplatter.com/wp-content/uploads/2017/01/pasta-an-cheese-1000x563.jpg'),
     new Recipe('A test Recipe', ' This is simply a test',
     'http://www.oneplatter.com/wp-content/uploads/2017/01/burger-and-fries.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  showSelectedRecipe(recipe: Recipe) {
    console.log('recipe ', recipe);
    this.recipeWasSelected.emit(recipe);
  }
}
