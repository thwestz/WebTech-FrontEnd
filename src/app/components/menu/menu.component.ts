import { Component, OnInit, EventEmitter } from '@angular/core';
import { SlidebarService } from '../../services/slidebar.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Session } from '../../Models/session.model';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private slidebarService: SlidebarService, private locals: LocalStorageService
    , private router: Router,private authService : AuthService) { }
  _opened: boolean;
  fullname: string;
  isAdmin: boolean = false;

  ngOnInit() {
    this._opened = this.slidebarService.isOpen;
    this.slidebarService.toggle.subscribe(isOpen => {
      const session: Session = this.locals.retrieve('token');
      if (session != null) {
        this.fullname = `${session.fname} ${session.lname}`
        if (session.status == 0) {
          this.isAdmin = false;
        } else {
          this.isAdmin = true;
        }
      }
      this._opened = isOpen;
    })
  }

  _toggleSidebar() {
    this.slidebarService.onClick();
  }

  _toggleClose() {
    this.slidebarService.onClose();
  }

  logout() {
    this.locals.clear();
    this.router.navigate(['./home'])

  }

}
