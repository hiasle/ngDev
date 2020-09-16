import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodsRoutingModule } from './foods-routing.module';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { FoodsListComponent } from './foods-list/foods-list.component';
import { FormsModule } from '@angular/forms';
import { FoodContainerComponent } from './food-container/food-container.component';

@NgModule({
  declarations: [FoodEditComponent, FoodsListComponent, FoodContainerComponent],
  imports: [CommonModule, FoodsRoutingModule, FormsModule],
})
export class FoodsModule {}
