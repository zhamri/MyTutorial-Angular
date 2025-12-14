import { Component } from '@angular/core';
import { Hello } from './hello/hello';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Hello],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
