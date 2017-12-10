import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-event-list',
  templateUrl: './home-event-list.component.html',
  styleUrls: ['./home-event-list.component.css']
})
export class HomeEventListComponent implements OnInit {
value : string = "HelloMan";
  constructor() { }

  ngOnInit() {
  }

}
