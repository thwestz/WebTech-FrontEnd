import { Component, OnInit } from '@angular/core';

import { EventService } from '../../services/event.service';
import { Event, STATUS} from '../../Models/Event/event.model'
import {Detail} from '../../Models/Event/detail.model'
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private eventList:Event[];
  
  constructor(private eventService:EventService,private userService : UserService) { }

  ngOnInit() {
    this.eventService.getEvent().subscribe((response) => {
      this.eventList = response;
        this.eventList.forEach(item => {
          this.userService.getUserByID(item.userID).subscribe(user => {
            item.tempUser = user
          })
        })
      })
 
  }
  approve(event : Event){
    event.status = STATUS.approved
    this.eventService.update(event).subscribe((response) => {
    })
  }

  reject(event : Event){
    event.status = STATUS.reject
    this.eventService.update(event).subscribe((response) => {
    })
  }
  
 
}

