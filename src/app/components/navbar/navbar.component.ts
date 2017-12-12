import { Component, OnInit, Input } from '@angular/core';
import { SlidebarService } from '../../services/slidebar.service';
import { User } from '../../Models/user.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [LoginService]
})
export class NavbarComponent implements OnInit {

  user: User;
  
  constructor(private slidebarService: SlidebarService,
    private loginService: LoginService
  ) { }


  ngOnInit() {
    this.user = new User();
  }

  signIn() {
    this.loginService.signIn(this.user.email,this.user.password).subscribe( res => {
      console.log(res)
    })
  }

  _toggleSidebar() {
    this.slidebarService.onClick();
  }
}
