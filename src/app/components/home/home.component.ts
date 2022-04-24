import { Component, OnInit } from '@angular/core';
import { TaskFunctionsComponent } from '../tasks/task-functions/task-functions.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  title: string = "To Do List";

  ngOnInit(): void {
  }

}
