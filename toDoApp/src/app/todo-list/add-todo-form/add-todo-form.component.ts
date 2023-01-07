import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoItem } from 'src/app/models/todoitem';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {

  @Input() content: string="";
  @Output() addToDo: EventEmitter<ToDoItem> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

   this.addToDo.emit({
    content: this.content,
    isCompleted: false
   })
  }


  
}
