import { Component, OnInit } from '@angular/core';
export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todo = [
    new Todo( 1, 'Learn To Sing', false, new Date()),
    new Todo( 2, 'Learn To Dance', false, new Date()),
    new Todo( 3, 'Learn To Swim', false, new Date()),
    new Todo( 4, 'Learn To Swim', false, new Date()),
    
    // { id: 1, description: 'Learn To Sing'},
    // { id: 2, description: 'Learn To Dance'},
    // { id: 3, description: 'Learn To Swim'},
    // { id: 4, description: 'Learn To Code'},
    ];
  constructor() { }

  ngOnInit() {
  }

}
