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

  faTimes = faTrashCan;
  faCheck = faCheckCircle;

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task: any) {
    this.deleteATask.emit(task);
  }

  completeTask(task: any) {
    const checkedTask = task
    this.completeATAsk.emit(checkedTask);
  }

}
