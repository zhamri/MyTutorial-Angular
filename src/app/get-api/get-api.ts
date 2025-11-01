// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-get-api',
//   imports: [],
//   templateUrl: './get-api.html',
//   styleUrl: './get-api.css',
// })
// export class GetApi {
//
// }

import {Component, OnInit} from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi {

  userList: User[] = [];                      // 👈 use the model here

  constructor(private userService: UserService) {}

  loadUser(): void {
    this.userService.getUsers().subscribe(users => {
      this.userList = users;
    });
  }
}




// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { User } from '../models/user';        // 👈 import the model
// import { UserService } from '../services/user';
//
// @Component({
//   selector: 'app-get-api',
//   imports: [CommonModule],
//   templateUrl: './get-api.html',
//   styleUrl: './get-api.css',
// })
// export class GetApi implements OnInit{
//   userList: User[] = [];                      // 👈 use the model here
//
//   constructor(private userService: UserService) {}
//
//   ngOnInit(): void {
//     this.userService.getUsers().subscribe(users => {
//       this.userList = users;
//     });
//   }
// }

