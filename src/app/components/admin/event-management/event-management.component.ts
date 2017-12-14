import { Component, OnInit } from '@angular/core';
import { STATUS, Event } from '../../../Models/Event/event.model';
import { EventService } from '../../../services/event.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.css']
})
export class EventManagementComponent implements OnInit {
  private eventList: Event[];

  constructor(private eventService: EventService, private userService: UserService) { }

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
  approve(event: Event) {
    event.status = STATUS.approved
    this.eventService.update(event).subscribe((response) => {
    })
  }

  reject(event: Event) {
    event.status = STATUS.reject
    this.eventService.update(event).subscribe((response) => {
    })
  }
}