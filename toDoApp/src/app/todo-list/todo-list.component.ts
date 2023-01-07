import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../models/todoitem';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoItems: ToDoItem[] = []; 
  
  constructor(private todoService: TodoService) { 
   this.todoItems = this.todoService.getItems();
  }
  
  ngOnInit(): void {
    
  }

  onAddTodo(item: ToDoItem) {
    this.todoService.addTodo(item);
    this.todoItems = this.todoService.getItems();
}

onItemDelete(item: ToDoItem){
  this.todoService.deleteItem(item);
  this.todoItems = this.todoService.getItems();
}

}
