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
  err : string[] = [];
  constructor(private userService: UserService) { }

  
  ngOnInit() {
    this.user = new User();
  }

  registed() {
    this.err = [];
    if(!this.user.email){
      this.err.push("Email")
      return;
    }
    if(!this.user.password){
      this.err.push("password")
      return;
    }

    this.user.status = STATUS.normal;
    this.user.types = TYPES.member;

    this.userService.create(this.user).subscribe( user => {

    }, err => {
      this.err.push(`This email already exists`);
    })

  }
}
