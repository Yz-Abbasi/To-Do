import { Injectable } from '@angular/core';
//import { TASKS } from 'src/app/mock-tasks';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'src/app/task-interface';

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public apiURL = "http://localhost:4300/tasks";

  constructor(public http:HttpClient) { }

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL);
  }

  deleteTask(task: Task){
    const url = `${this.apiURL}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  addTask (task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiURL, task, httpOptions)
  }
}
