import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, of, throwError } from 'rxjs';
import { UserService } from '../src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  delay: number = 5000;

  loginForm = new FormGroup({username: new FormControl, password: new FormControl});
  spin: boolean = false;

  constructor(private router: Router, private authorization: UserService) { }

  ngOnInit(): void {
  }

  sleep(miliSeconds: number){
    setTimeout(() => this.spin, miliSeconds)
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.spin = true;
      this.authorization.login(this.loginForm.value).subscribe(
        (result) => {
          setTimeout(() => this.router.navigate(['/admin']), 4000)
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}