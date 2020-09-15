import { Component, OnInit } from '@angular/core';
import { FoodService } from '../data/food.service';
import { Food } from '../data/food';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-container-component',
  templateUrl: './container-component.component.html',
  styleUrls: ['./container-component.component.scss'],
})
export class ContainerComponentComponent implements OnInit {
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

  onFoodSaved(f: Food): void {
    console.log('saving to service:', f);
    const existing: Food = this.foods.find((i) => i.id === f.id);
    if (existing != null) {
      Object.assign(existing, f);
    } else {
      this.foods.push(f);
    }
    console.log('foods array after save', this.foods);
    this.current = null;
  }
}
