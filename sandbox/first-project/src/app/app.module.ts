import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ContainerComponentComponent } from './container-component/container-component.component';
import { FoodsListComponent } from './foods-list/foods-list.component';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    MainComponent,
    ContainerComponentComponent,
    FoodsListComponent,
    FoodEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
