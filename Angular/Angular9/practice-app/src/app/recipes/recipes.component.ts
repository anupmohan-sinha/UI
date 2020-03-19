import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

/*   onRecipeSelect(recipe: Recipe) {
    console.log('passed recipe ', recipe);
  } */

}
