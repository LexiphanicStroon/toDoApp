import { Injectable } from '@angular/core';
import { ToDoItem } from './models/todoitem';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
   

  todoItems: ToDoItem[] = [];

  constructor() { }

  getItems() {
    return this.todoItems;
  }

  addTodo(item: ToDoItem){
    this.todoItems = [...this.todoItems, item];
  }

  deleteItem(item: ToDoItem){
    var indexOfItem = this.todoItems.findIndex(i => i.content == item.content)
    this.todoItems.splice(indexOfItem, 1);
  }
}
