import { Component, inject } from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {
  private formBuilder = inject(FormBuilder);
  
   profileForm = this.formBuilder.group({
    name: ['', Validators.required],
    phone: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      name: 'Nancy',
      phone: '555-123-4567',
      address: {
        street: '123 Drew Street',
      },
    });
  }
}
