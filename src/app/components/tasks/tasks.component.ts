import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
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
    time : ""
  }

tasks: Task[] = []

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }
  getTasks(){
    this.taskService.getTask().subscribe(tasks => this.tasks = tasks)
  }


  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id ));
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }

}
