import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../Models/user.model';
import { LocalStorageService } from 'ngx-webstorage';
import { Session } from '../../../Models/session.model';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  userList: User[]
  userSearch: User[];
  editUser: User;
  session : Session;
  constructor(private userService: UserService,private locals : LocalStorageService) { }

  ngOnInit() {
    this.editUser = new User();
    this.userList = [];
    this.userSearch = [];
    this.userService.getUsers().subscribe(res => {
      this.userList = res;
      this.userSearch = res;
    })
    this.session = this.locals.retrieve('token');
  
  }

  loadUser4Edit(user: User) {
    this.editUser = user;
  }

  updateUser() {
    this.userService.update(this.editUser).subscribe(res => {

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
