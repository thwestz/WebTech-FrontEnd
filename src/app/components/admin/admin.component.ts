import { Component, OnInit } from '@angular/core';

import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private eventList:Event[];
  

  constructor(private eventService:EventService) { }

  ngOnInit() {
    this.eventService.getEvent().subscribe((response) => {
      this.eventList = response;
    })
 
  }

}

interface Event{
  eName: string;
  userID: string;
  eDate: string;
  eLocat: string;
  eCap: number;
  status: number;
 }

