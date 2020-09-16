import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodsListComponent } from './foods-list/foods-list.component';
import { FoodContainerComponent } from './food-container/food-container.component';

const routes: Routes = [{ path: '', component: FoodContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodsRoutingModule {}
