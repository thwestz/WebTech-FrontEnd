import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User, STATUS } from '../../../Models/user.model';
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
  loading : boolean;
  constructor(private userService: UserService,private locals : LocalStorageService) { }

  ngOnInit() {
    this.loading = true;
    this.editUser = new User();
    this.userList = [];
    this.userSearch = [];
    this.userService.getUsers().subscribe(res => {
      this.userList = res;
      this.userSearch = res;
      this.loading = false;
    })
    this.session = this.locals.retrieve('token');
  
  }

  loadUser4Edit(user: User) {
    this.editUser = user;
  }

  updateUser() {
    this.loading = true;
    this.userService.update(this.editUser).subscribe(res => {
      this.loading = false;
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
      || STATUS[user.status].search(value) >= 0

    });

  }
}
