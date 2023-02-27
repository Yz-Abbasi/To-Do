import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/task-interface';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-functions',
  templateUrl: './task-functions.component.html',
  styleUrls: ['./task-functions.component.css']
})
export class TaskFunctionsComponent implements OnInit {
  @Input() task!: Task;
  @Input() id!: number;
  @Output() deleteATask: EventEmitter<Task> = new EventEmitter;
  @Output() completeATAsk: EventEmitter<Task> = new EventEmitter;
  @Output() editATask: EventEmitter<Task> = new EventEmitter;

  dtask!: string;
  date!: string;
  time!: string;
  isEdit: boolean = false;

  faCheck = faCheckCircle;
  faPencil = faPencil;

  clickCount = 0;
  completedTaskCount = 0;

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

  editTask(task: any) {
    let editingTask = task;
    editingTask.isEdit = true;
    this.editATask.emit(editingTask);
  }

}
