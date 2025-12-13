import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {

  studentForm;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submit() {
    console.log(this.studentForm.value);
  }

  get name() {
    return this.studentForm.get('name');
  }

  get email() {
    return this.studentForm.get('email');
  }

}
