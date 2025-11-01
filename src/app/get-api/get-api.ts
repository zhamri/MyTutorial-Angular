import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi implements OnInit {
  http = inject(HttpClient)
  userList: any[] = [];

  getUsers(){
    this.http.get<any[]>("https://jsonplaceholder.typicode.com/users").subscribe(result=>{
      this.userList = result;
    })
  }

  ngOnInit(): void {
    // this.getUsers();
  }
}
