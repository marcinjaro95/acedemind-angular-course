import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[] = [];

  constructor(private usersService: UserService) {
  }

  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }
}
