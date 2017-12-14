import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { Event } from '../../../Models/Event/event.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private eventService: EventService, private userService: UserService) { }
  eventList: Event[];
  ngOnInit() {
    this.eventList = [];

    this.eventService.getEventByUserID().subscribe(res => {
      this.eventList = res;
      this.eventList.forEach(item => {
        this.userService.getUserByID(item.userID).subscribe(user => {
          item.tempUser = user
        })
      })
    })
  }


}
