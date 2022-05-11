import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/task-interface';
import { TASKS } from 'src/app/mock-tasks';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fulfilled',
  templateUrl: './fulfilled.component.html',
  styleUrls: ['./fulfilled.component.css']
})
export class FulfilledComponent implements OnInit {
@Input() public dtask!: Task;
@Output() deleteATask:EventEmitter<Task> = new EventEmitter;

faTimes= faTrashCan;
// public fulfilled!:Task;
  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(dtask: any) {
    this.deleteATask.emit(dtask);
  }


}
