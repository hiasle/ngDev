import { Component, OnInit } from '@angular/core';
import { FoodService } from '../data/food.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private fs: FoodService) {}

  foods = this.fs.getAllFoods();

  ngOnInit(): void {}
}
