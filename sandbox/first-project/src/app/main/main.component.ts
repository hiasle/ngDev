import { Component, OnInit } from '@angular/core';
import { PersonService } from '../data/person.service';
import { Person } from '../data/person';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private ps: PersonService) {}

  persons = this.ps.getAllPersons();

  ngOnInit(): void {}
}
