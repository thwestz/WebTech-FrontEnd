import { Component, OnInit } from '@angular/core';
import { User, STATUS, TYPES } from '../../../../Models/user.model';
import { UserService } from '../../../../services/user.service';


@Component({
  selector: 'app-home-register',
  templateUrl: './home-register.component.html',
  styleUrls: ['./home-register.component.css'],
  providers: [UserService]
})
export class HomeRegisterComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) { }

  
  ngOnInit() {
    this.user = new User();
  }

  registed() {
    this.user.status = STATUS.normal;
    this.user.types = TYPES.member;

    this.userService.create(this.user).subscribe(user => {
      console.log(user);
    })
    // this.userService.getUsers().subscribe(users => {
    //   console.log(users);
    // })
  }
}
