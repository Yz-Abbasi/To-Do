import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  authorize!: boolean;

  constructor(public http:HttpClient, private router: Router) { }
// Login service starts from here, modify later for compatibility with DB

isLoggedIn() {
  return localStorage.getItem('user') !== null;
}

logout() {
  localStorage.removeItem('token');
  this.router.navigate(['login']);
}

login({ username, password }: any): Observable<any> {
  if (username === 'admin' && password === 'admin123') {
    localStorage.setItem("user", "admin");
    return of({ name: 'Yazdan Abbasi', username: 'admin' });
  }
  return throwError(() => new Error('Check your Username and Password'));
}
}
