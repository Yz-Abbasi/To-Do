import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/task-interface';
import { TASKS } from 'src/app/mock-tasks';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-fulfilled',
  templateUrl: './fulfilled.component.html',
  styleUrls: ['./fulfilled.component.css']
})
export class FulfilledComponent implements OnInit {
@Input() public dtask!: Task;
@Output() deleteATask:EventEmitter<Task> = new EventEmitter;

faTimes= faTrashCan;

public _dtask!: string;
public _ddate!: string;
public _dtime!: string;

  constructor() { }

  ngOnInit(): void {
    this._dtask = this.dtask.task;
    this._ddate = this.dtask.date;
    this._dtime = this.dtask.time;
  }

  deleteTask(dtask: any) {
    this.deleteATask.emit(dtask);
  }
}
