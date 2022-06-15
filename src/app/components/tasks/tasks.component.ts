import { Component, OnInit, Output, EventEmitter, SimpleChange, Input } from '@angular/core';
import { Task } from 'src/app/task-interface';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { MatNativeDateModule, ThemePalette } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TaskService } from 'src/app/src/app/services/task.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { text } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

tasks: Task[] = [];
done: Task[] =[];


updateId!: number;
isEditEnabled: boolean = false;

// tasks: Task[] = [];
// dtasks: Task[] = [];
// uTask!: Task;
todoForm !: FormGroup;

  constructor(private formBuilder : FormBuilder) {
   }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      task : ['', Validators.required],
      date : ['', Validators.required],
      time : ['', Validators.required]
    });

  }
  // old functions

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.isEditEnabled = false;
  }

  deleteDone(index: number) {
    this.done.splice(index, 1);
    this.isEditEnabled = false;
  }

  addTask(){
    this.tasks.push({
      task: this.todoForm.value.task,
      date: this.todoForm.value.date,
      time: this.todoForm.value.time,
      done: false
    });
    this.todoForm.reset();
  }

  onEdit(item: Task, i: number){
    console.log(`${i} AND ${i}`)
    this.todoForm.controls['task'].setValue(item.task);
    this.todoForm.controls['date'].setValue(item.date);
    this.todoForm.controls['time'].setValue(item.time);
    this.updateId = i;
    this.isEditEnabled = true;
  }

  updateTask(){
    this.tasks[this.updateId].task = this.todoForm.value.task;
    this.tasks[this.updateId].date = this.todoForm.value.date;
    this.tasks[this.updateId].time = this.todoForm.value.time;
    this.tasks[this.updateId].done = false;
    this.todoForm.reset();
    this.isEditEnabled = false;
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
