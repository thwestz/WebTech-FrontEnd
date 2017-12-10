import { Component, OnInit, Input } from '@angular/core';
import { SlidebarService } from '../../services/slidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  constructor(private slidebarService : SlidebarService) { }

  ngOnInit() {

  }

  _toggleSidebar() {
    this.slidebarService.onClick();
  }
}
