import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Food } from '../data/food';

@Component({
  selector: 'app-foods-list',
  templateUrl: './foods-list.component.html',
  styleUrls: ['./foods-list.component.scss'],
})
export class FoodsListComponent implements OnInit {
  @Input() foods: Food[];
  @Output() foodSelected: EventEmitter<Food> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  selectFood(f: Food): void {
    this.foodSelected.emit(f);
  }
}
