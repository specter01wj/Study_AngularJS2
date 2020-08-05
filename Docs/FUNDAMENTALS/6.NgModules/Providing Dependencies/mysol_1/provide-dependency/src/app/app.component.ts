import { Component, OnInit } from '@angular/core';

import { UserService } from './services/user.service';
import { User } from './services/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'Provide Dependency';
  users: User[];


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().then(users => this.users = users);









    
  }

}
