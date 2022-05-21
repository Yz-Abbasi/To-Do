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
  isDone: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showDate() {
    console.log(this.date);
  }

  submit() {
    if(!this.task){
      alert("FILL THE TASK");
      return;
    }
    const NEW_TASK = {
      task: this.task,
      date: this.date,
      time: this.time,
      isDone: this.isDone
    }

  this.onAddTask.emit(NEW_TASK);
}
}
