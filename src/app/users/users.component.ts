import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { User } from '../_models/index';
import { UserService } from '../_services/index';


@Component({
  moduleId: module.id,
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  currentUser: User;
  users: any = {};



  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => { this.loadAllUsers(); });
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; });
  }

}
