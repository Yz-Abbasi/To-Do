import { Component, OnInit, Injectable, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../src/app/services/task.service';
import { Observable } from 'rxjs';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import { USER } from '../user-interfacet';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Output() onAddUser: EventEmitter<USER> = new EventEmitter();
  username!: string;
  password!: string;
  faTimes = faCheckCircle;

  constructor() { }

  ngOnInit(): void {
  }

  submitUser(){
    if (!this.username){
      alert("Please fill the Username section");
      return;
    } else if (!this.password){
      alert("Please fill the Password section");
      return;
    } else{
  const newUser = {
    username : this.username,
    password : this.password
  }
  this.onAddUser.emit(newUser);
}}
}