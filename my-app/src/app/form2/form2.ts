import { Component, inject } from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {Validators} from '@angular/forms';
import {FormArray} from '@angular/forms';

@Component({
  selector: 'app-form2',
  imports: [ReactiveFormsModule],
  templateUrl: './form2.html',
  styleUrl: './form2.css'
})
export class Form2 {
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
    aliases: this.formBuilder.array([this.formBuilder.control('')]),
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  removeAlias(index: number) {
    this.aliases.removeAt(index);
  }

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
