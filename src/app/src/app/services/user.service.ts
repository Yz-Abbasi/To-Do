import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { USER } from 'src/app/user-interfacet';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public apiURL = "http://localhost:4300/users";

  constructor(public http:HttpClient, private router: Router) { }

   getUser(): Observable<USER> {
     return this.http.get<USER>(this.apiURL);
   }

   addUser(user: USER): Observable<USER> {
     return this.http.post<USER>(this.apiURL, user, httpOptions)
   }


// Login service starts from here, modify later for compatibility with DB

setToken(token: string): void {
  localStorage.setItem('token', token);
}

getToken(): string | null {
  return localStorage.getItem('token');
}

isLoggedIn() {
  return this.getToken() !== null;
}

logout() {
  localStorage.removeItem('token');
  this.router.navigate(['login']);
}

login({ username, password }: any): Observable<any> {
  if (username === 'admin' && password === 'admin123') {
    this.setToken('abcdefghijklmnopqrstuvwxyz');
    return of({ name: 'Yazdan Abbasi', username: 'admin' });
  }
  return throwError(new Error('Failed to login'));
}
}