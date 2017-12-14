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
  err: string[] = [];
  success: boolean;
  loading: boolean;
  constructor(private userService: UserService) { }


  ngOnInit() {
    this.user = new User();
  }

  registed() {
    this.loading = true;
    this.success = false;
    this.err = [];
    if (!this.user.email) {
      this.err.push("Please fill out this email address. !")
      this.loading = false;
      return;
    }
    if (!this.user.password) {
      this.err.push("Please fill out this password. !")
      this.loading = false;
      return;
    }
    if (this.user.password.length < 8) {
      this.err.push("Please fill out password more than 8 characters. !")
      this.loading = false;
      return;
    }

    if (!this.user.fname) {
      this.err.push("Please fill out this first name. !")
      this.loading = false;
      return;
    }

    if (!this.user.lname) {
      this.err.push("Please fill out this last name. !")
      this.loading = false;
      return;
    }


    this.user.status = STATUS.member;

    this.userService.create(this.user).subscribe(user => {
      this.success = true;
      this.loading = false;
    }, err => {
      this.loading = false;
      this.err.push(`This email already exists`);
      this.loading = false;
      return;
    })

  }
}
