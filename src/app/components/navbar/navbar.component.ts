import { Component, OnInit, Input } from '@angular/core';
import { SlidebarService } from '../../services/slidebar.service';
import { User } from '../../Models/user.model';
import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { Session } from '../../Models/session.model';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {
  user: User;
  session: Session;
  constructor(private slidebarService: SlidebarService,
    private authService: AuthService,
    private localSt: LocalStorageService,
    private router: Router
  ) { }


  ngOnInit() {
    this.user = new User();
  }

  signIn() {

    this.authService.signIn(this.user.email, this.user.password).subscribe(res => {
      this.localSt.store('token', res);
      document.getElementById("closeModal").click();
      this.router.navigate(['/home']);
      this.user = new User();
    })
  }

  _toggleSidebar() {
    this.slidebarService.onClick();
  }
}
