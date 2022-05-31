import { Component, OnInit, Output, EventEmitter, Input, SimpleChange} from '@angular/core';
import { DataService } from 'src/app/src/app/services/data.service';
import { Task } from 'src/app/task-interface';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
//   @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
//   @Output() onEditTask: EventEmitter<Task> = new EventEmitter();
//   @Input() taskToUpdate!: Task;


//   id!: Number;
//   task!: string;
//   date!: string;
//   time!: string;
//   isEdit: boolean = false;

//   updateIndex!: Number;

//   constructor() { }
   ngOnInit(): void {
   }

//   submit() {
//     if(!this.task){
//       alert("FILL THE TASK");
//       return;
//     }
//     this.isEdit = false;

//     const NEW_TASK = {
//       task: this.task,
//       date: this.date,
//       time: this.time,
//       isEdit: this.isEdit
//     }

//   this.onAddTask.emit(NEW_TASK);

// }

//   update(){
//     const EDITED_TASK = {
//       task: this.task,
//       date: this.date,
//       time: this.time,
//       isEdit: this.isEdit
//     }
//     console.log(EDITED_TASK);
//     this.onEditTask.emit(EDITED_TASK);
//     this.isEdit = false;
//   }

//   ngOnChanges(change: SimpleChange){
//     this.task = this.taskToUpdate.task;
//     this.date = this.taskToUpdate.date;
//     this.time = this.taskToUpdate.time;
//     this.isEdit = true;
//   }
// }
}
