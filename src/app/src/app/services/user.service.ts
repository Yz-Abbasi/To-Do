import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  constructor(public http:HttpClient) { }

   getUser(): Observable<USER> {
     return this.http.get<USER>(this.apiURL);
   }

   addUser(user: USER): Observable<USER> {
     return this.http.post<USER>(this.apiURL, user, httpOptions)
   }
}
