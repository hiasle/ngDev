import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from './food';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private httpClient: HttpClient) {}

  getAllFoods(): Observable<Food[]> {
    return this.httpClient.get<Food[]>(environment.url);
  }
}
