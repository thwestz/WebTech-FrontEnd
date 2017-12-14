import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../Models/user.model';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  userList: User[]
  userSearch : User[];
  array = [];
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userList = [];
    this.userSearch = [];
    this.userService.getUsers().subscribe(res => {
      this.userList = res;
      this.userSearch = res;
      console.log(this.userList)
    })
  }


  search(value: string) {
    if (!value) {
      this.userList = this.userSearch;
      return;
    }

    value = value.trim().toLowerCase().replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
    this.userList = this.userSearch.filter(user => {
      return user.fname.toLocaleLowerCase().concat(` `).concat(user.lname.toLocaleLowerCase()).search(value) >= 0 
      || user.email.toLocaleLowerCase().search(value) >= 0 
      // User.STATUS
      
    });

  }
}
