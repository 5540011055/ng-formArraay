import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
  FormGroupDirective
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  orderForm: FormGroup;
  test: FormArray;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      customerName: '',
      email: '',
      items: this.formBuilder.array([this.createItem()])
    });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: ''
    });
  }

  addItem(): void {
    this.test = this.orderForm.get('items') as FormArray;
    this.test.push(this.createItem());
  }

  deleteItem(i: number) {
    const del = <FormArray>this.orderForm.controls['items'];
    del.removeAt(i);
  }
}
