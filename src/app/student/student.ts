import {Component, signal} from '@angular/core';
import {FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';

type StudentItem = { id: number; name: string; email: string };

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  // signal array (the list)
  students = signal<StudentItem[]>([
    {id: 1, name: 'Ali', email: 'ali@example.com'},
    {id: 2, name: 'Bala', email: 'bala@example.com'},
  ]);

  private nextId = 3;

  studentForm;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submit() {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }

    const {name, email} = this.studentForm.value;

    // add to signal array (create new array)
    this.students.update(list => [
      {id: this.nextId++, name: name!, email: email!},
      ...list,
    ]);

    this.studentForm.reset();
  }

  deleteStudent(id: number) {
    this.students.update(list => list.filter(s => s.id !== id));
  }

  get name() {
    return this.studentForm.get('name');
  }

  get email() {
    return this.studentForm.get('email');
  }

  trackById = (_: number, item: StudentItem) => item.id;
}
