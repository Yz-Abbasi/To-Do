import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/task-interface';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-functions',
  templateUrl: './task-functions.component.html',
  styleUrls: ['./task-functions.component.css']
})
export class TaskFunctionsComponent implements OnInit {
  @Input() task!: Task;
  @Output() deleteATask: EventEmitter<Task> = new EventEmitter;
  faTimes = faTimesCircle;

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task: any) {
    this.deleteATask.emit(task);
  }

}
