import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/task-interface';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task-functions',
  templateUrl: './task-functions.component.html',
  styleUrls: ['./task-functions.component.css']
})
export class TaskFunctionsComponent implements OnInit {
  @Input() task!: Task;
  @Input() done!: Task;
  @Output() deleteATask: EventEmitter<Task> = new EventEmitter;
  @Output() completeATAsk: EventEmitter<Task> = new EventEmitter;

  dtask!: string;
  date!: string;
  time!: string;
  isDone: boolean = false;

  faCheck = faCheckCircle;

  clickCount = 0;
  completeTaskCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task: any) {
    this.deleteATask.emit(task);
  }

  completeTask(task: any) {
    const CHECKED_TASK = task;
    this.completeATAsk.emit(CHECKED_TASK);
    this.clickCount++;
  }

}
