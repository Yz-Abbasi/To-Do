import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { observable } from 'rxjs';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
