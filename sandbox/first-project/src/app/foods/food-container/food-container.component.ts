import { Component, OnInit } from '@angular/core';
import { FoodService } from '../data/food.service';
import { Food } from '../data/food';

@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.component.html',
  styleUrls: ['./food-container.component.scss'],
})
export class FoodContainerComponent implements OnInit {
  constructor(private fs: FoodService) {}

  foods: Food[];
  current: Food;

  ngOnInit(): void {
    this.fs.getAllFoods().subscribe((data) => (this.foods = data));
  }

  onFoodSelected(f: Food): void {
    console.log('saving to service:', f);

    this.current = { ...f };

    console.log('Foods array after save', this.foods);
  }

  onFoodDelete(f: Food): void {
    this.foods = this.foods.filter((item) => item.id !== f.id);
  }

  onFoodSaved(f: Food): void {
    console.log('saving to service:', f);
    const existing: Food = this.foods.find((i) => i.id === f.id);
    if (existing != null) {
      Object.assign(existing, f);
    } else {
      const copy = this.foods;
      f.id = this.foods.length + 1;
      copy.push(f);
      this.foods = Object.assign([], copy);
    }
    console.log('foods array after save', this.foods);
    this.current = null;
  }

  onFoodAdd(f: Food): void {
    f.id = this.foods.length + 1;
    const newFoodList = Object.assign([], this.foods);
    newFoodList.push(f);
    this.foods = newFoodList;
    this.current = null;
  }
}
