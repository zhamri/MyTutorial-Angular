import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './hello.html',
  styleUrl: './hello.css',
})
export class Hello {}
