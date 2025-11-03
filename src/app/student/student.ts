// src/app/student/student.ts

import { Component } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class StudentComponent {
  course: string = "STIWK2124 Web Engineering";
  student: Student = {
    id: 1,
    firstName: 'zhamri',
    lastName: 'che ani',
    year: 2025,
  };

  imageUrl = 'assets/images/uum.png';
}
