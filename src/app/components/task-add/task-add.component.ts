import { Component, OnInit, Output, EventEmitter,  } from '@angular/core';
import { Task } from 'src/app/task-interface';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  task!: string;
  date!: string;
  time!: string;
  constructor() { }

  ngOnInit(): void {
  }
  /*
  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd.mm.yyyy'
    // other options are here...
  };
    // optional date changed callback
    onDateChanged(event: IMyDateModel): void {
      // date selected
    }*/
    showDate() {
      console.log(this.date);
    }

  submit() {
    if(!this.task){
      alert("FILL THE TASK");
      return;
    }
    const newTask = {
      task: this.task,
      date: this.date,
      time: this.time
    }
  // @todo - emit event
  this.onAddTask.emit(newTask);
}
}