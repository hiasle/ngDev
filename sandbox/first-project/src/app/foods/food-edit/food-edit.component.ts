import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../data/food';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss'],
})
export class FoodEditComponent implements OnInit {
  @Input() food: Food;
  @Input() editMode: boolean;
  @Output() saveFood: EventEmitter<Food> = new EventEmitter();
  @Output() addFood: EventEmitter<Food> = new EventEmitter();

  foodForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.foodForm.patchValue(this.food);
    this.initForm();
    this.subscribeChanges();
  }

  ngOnChanges(): void {
    this.initForm();
  }

  private initForm(): void {
    this.foodForm = this.fb.group({
      foodName: [
        this.food.foodName,
        [Validators.required, Validators.minLength(3)],
      ],
      foodType: [this.food.foodType],
      calories: [this.food.calories, [Validators.required, Validators.min(0)]],
    });
  }

  private subscribeChanges(): void {
    this.foodForm.valueChanges.subscribe((vals) => {
      console.log('changes happening @form: ', vals);
    });
  }

  saveFoodForm(foodForm): void {
    console.log('Save: ' + foodForm);
    const changed = Object.assign(this.food, foodForm.value);
    this.food = changed;
    this.saveFood.emit(this.food);
  }

  doAdd(): void {
    this.addFood.emit(this.food);
  }

  doDelete(): void {
    console.log(`deleting ${this.food.foodName}`);
  }

  violatesMinLength(): boolean {
    let result = false;
    const errs: ValidationErrors = this.foodForm.controls.foodName.errors;

    if (errs != null) {
      console.log('Errors in Name field: ', errs);
      if (errs['minlength']) {
        result = true;
      }
    }
    return result;
  }

  violatesMinSize(): boolean {
    let result = false;
    const errs: ValidationErrors = this.foodForm.controls.calories.errors;

    if (errs != null) {
      console.log('Errors in Name field: ', errs);
      if (errs['min']) {
        result = true;
      }
    }
    return result;
  }
}
