import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  addUser() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
        data => {
          console.log('dat received :', data);
          this.alertService.success('User Added', true);
          this.router.navigate(['/users']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  ngOnInit() {
  }

}



