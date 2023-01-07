import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoItem } from 'src/app/models/todoitem';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
  
@Input() item: ToDoItem | undefined;
@Output() itemDelete: EventEmitter<ToDoItem> = new EventEmitter();
  constructor() { }
  
  ngOnInit(): void {
    
  }

onDelete() {
  this.itemDelete.emit(this.item);
}

}
