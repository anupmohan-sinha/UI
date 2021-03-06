import { Ingredient } from '../shared/ingredient.model';
import { Component } from '@angular/core';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent {

    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
        new Ingredient('Banana', 15)
    ];
    constructor() {
    }

    addItem(item: Ingredient) {
        console.log('item ', item);
        this.ingredients.push(item);
    }
}
