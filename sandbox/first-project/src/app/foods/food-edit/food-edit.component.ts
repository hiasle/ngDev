import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../data/food';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss'],
})
export class FoodEditComponent implements OnInit {
  @Input() food: Food;
  @Input() editMode: boolean;
  @Output() saveFood: EventEmitter<Food> = new EventEmitter();
  @Output() addFood: EventEmitter<Food> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  doSave(): void {
    this.saveFood.emit(this.food);
  }

  doAdd(): void {
    this.addFood.emit(this.food);
  }

  doDelete(): void {
    console.log(`deleting ${this.food.foodName}`);
  }
}
