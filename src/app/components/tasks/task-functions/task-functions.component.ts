import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/task-interface';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-functions',
  templateUrl: './task-functions.component.html',
  styleUrls: ['./task-functions.component.css']
})
export class TaskFunctionsComponent implements OnInit {
  @Input() task!: Task;
  @Output() deleteATask: EventEmitter<Task> = new EventEmitter;
  faTimes = faTrashCan;

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task: any) {
    this.deleteATask.emit(task);
  }

}
