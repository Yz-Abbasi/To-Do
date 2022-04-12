import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, ValidatorFn, EmailValidator } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { USER } from '../user-interfacet';
<<<<<<< Updated upstream
=======
import { faLock } from '@fortawesome/free-solid-svg-icons'
>>>>>>> Stashed changes

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
<<<<<<< Updated upstream
=======
  faLock = faLock;
>>>>>>> Stashed changes
  username!: string;
  password!: string;

  constructor() { }

  ngOnInit(): void {
  }
  getUser() {
    if (!this.username){
      alert("Enter yout Username before continuing");
    } else if (!this.password){
      alert("Enter your Password before continuing")
    } else{
    console.log("User received");}
  }


}
