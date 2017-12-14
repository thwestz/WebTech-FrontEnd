import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User, STATUS } from '../../Models/user.model';
import { AuthGuard } from '../../auth-guard.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-home-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
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

    this.user.status = STATUS.member;

    this.userService.create(this.user).subscribe( user => {

    }, err => {
      this.err.push(`This email already exists`);
    })

  }
}
