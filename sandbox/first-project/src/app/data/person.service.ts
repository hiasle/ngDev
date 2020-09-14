import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private httpClient: HttpClient) {}

  getAllPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(environment.url);
  }
}
