import { Component, OnInit } from '@angular/core';

import { EventService } from '../../services/event.service';
import { Event, STATUS} from '../../Models/Event/event.model'
import {Detail} from '../../Models/Event/detail.model'
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
      this.eventList.forEach(res => {
        
      })
    })
 
  }
  approve(event : Event){
    event.status = STATUS.pending
    this.eventService.update(event).subscribe((response) => {
    })
  }
 
}

