import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry} from 'rxjs';
import { Task } from 'src/app/task-interface';

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


@Injectable({
  providedIn: 'root'
})
export class TaskService{
  public taskURL = 'api/tasks/';
  public dtaskURL = 'api/dtasks/';

  constructor(private http:HttpClient) { }

  // getTask(): Observable<Task[]> {
  //   return this.http.get<Task[]>(this.taskURL).pipe(retry(2),
  //   catchError((error: HttpErrorResponse) => {
  //     console.error(error);
  //     return throwError(error);
  //   })
  //   );
  // }

  // getDTask(): Observable<Task[]> {
  //   return this.http.get<Task[]>(this.dtaskURL).pipe(retry(2),
  //   catchError((error: HttpErrorResponse) => {
  //     console.error(error);
  //     return throwError(error);
  //   })
  //   );
  // }

  // deleteTask(task: Task) {
  //   const URL = `${this.taskURL}/${task.id}`;
  //   return this.http.delete<Task>(URL);
  // }

  // deleteDTask(dtask: Task) {
  //   const URL = `${this.dtaskURL}/${dtask.id}`;
  //   return this.http.delete<Task>(URL);
  // }

  // addTask(task: Task): Observable<Task> {
  //   return this.http.post<Task>(this.taskURL, task, httpOptions);
  // }

  // addDoneTask(dtask: Task): Observable<Task> {
  //   return this.http.post<Task>(this.dtaskURL, dtask, httpOptions);
  // }

  // putTask(task : Task, id: number) {
  //   return this.http.put<Task>(this.taskURL, task, httpOptions)
  // }
}
