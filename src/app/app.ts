import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GetApi} from './get-api/get-api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GetApi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MyTutorial-Angular');
}
