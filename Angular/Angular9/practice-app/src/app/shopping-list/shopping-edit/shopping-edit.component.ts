import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @Output() newItem = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  addItem(name: string, amount: number) {
    console.log('name ', name);
    console.log('amount ', amount);
    this.newItem.emit({name, amount});
  }
}
