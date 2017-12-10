import { Component, OnInit } from '@angular/core';
import { SlidebarService } from '../../services/slidebar.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private slidebarService : SlidebarService) { }
  _opened: boolean;

  ngOnInit() {
    this._opened = this.slidebarService.isOpen;
    this.slidebarService.toggle.subscribe(isOpen => {
      this._opened = isOpen;
    })
  }

  _toggleSidebar() {
   this.slidebarService.onClick();
  }

  _toggleClose() {
    this.slidebarService.onClose();
  }

}
