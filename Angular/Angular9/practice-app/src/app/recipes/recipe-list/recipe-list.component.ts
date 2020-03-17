import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test Recipe', ' This is simply a test',
     'https://images.all-free-download.com/images/graphiclarge/delicious_food_01_hd_pictures_167553.jpg'),
     new Recipe('A test Recipe', ' This is simply a test',
     'https://images.all-free-download.com/images/graphiclarge/delicious_food_01_hd_pictures_167553.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
