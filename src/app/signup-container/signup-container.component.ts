import { Component, OnInit } from '@angular/core';
import { USER } from '../user-interfacet';
import { UserService } from '../src/app/services/user.service';

@Component({
  selector: 'app-signup-container',
  templateUrl: './signup-container.component.html',
  styleUrls: ['./signup-container.component.css']
})
export class SignupContainerComponent implements OnInit {
users : USER[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  
  addUser(user: USER){
    this.userService.addUser(user).subscribe((task) => this.users.push(user));
  }
}
