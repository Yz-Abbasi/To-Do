import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task-interface';
import { TaskService } from 'src/app/src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  task ={
    id : null,
    task : "",
    date : "",
    time : "",
    isDone: false
  }

  dtask = {
    id: null,
    task: "",
    date: "",
    time: "",
    isDone: true
  }

tasks: Task[] = [];
dtasks: Task[] = [];

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
    this.getDtasks();
  }
  getTasks(){
    this.taskService.getTask().subscribe(tasks => this.tasks = tasks)
  }

  getDtasks (){
    this.taskService.getDTask().subscribe(dtasks => this.dtasks = dtasks)
  }


  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id ));
  }

  deleteDTask(dtask: Task) {
    this.taskService.deleteTask(dtask).subscribe(() => this.dtasks = this.dtasks.filter(t => t.id !== dtask.id ));
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }

  pushTask(task: Task){
    this.taskService.addDTask(task).subscribe((task) => this.dtasks.push(task));
    this.deleteTask(task);
  }

}
