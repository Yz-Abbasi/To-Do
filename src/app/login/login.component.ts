import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, ValidatorFn, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { USER } from '../user-interfacet';
//import { faLock } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
  username: new FormControl,
  password: new FormControl,
  });

  constructor(private authorization: UserService, private router: Router) { }

  ngOnInit(): void {
    if(this.authorization.isLoggedIn()){
      this.router.navigate(['admin']);
    }
  }
  /*
  onSubmit() {
    if (!this.username){
      alert("Enter yout Username before continuing");
    } else if (!this.password){
      alert("Enter your Password before continuing")
    } else{
    console.log("User received");}
  } */
  
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authorization.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/admin']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }

}
