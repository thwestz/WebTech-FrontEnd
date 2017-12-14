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
  eventList: Event[];
  eventSearch: Event[];
  loading: boolean;
  constructor(private eventService: EventService, private userService: UserService) { }

  ngOnInit() {
    this.loading = true;
    this.eventService.getEvent().subscribe((response) => {
      this.eventList = response;
      this.eventList.forEach(item => {
        this.userService.getUserByID(item.userID).subscribe(user => {
          item.tempUser = user

        })
      })
      this.eventSearch = [];
      this.eventSearch = this.eventList;
      this.loading = false;

    })

  }
  approve(event: Event) {
    this.loading = true;
    event.status = STATUS.approved
    this.eventService.update(event).subscribe((response) => {
      this.loading = false;
    })
  }

  reject(event: Event) {
    this.loading = true;
    event.status = STATUS.reject
    this.eventService.update(event).subscribe((response) => {
      this.loading = false;
    })
  }

  search(value: string) {
    if (!value) {
      this.eventSearch = this.eventList;
      return;
    }

    value = value.trim().toLowerCase().replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
    this.eventSearch = this.eventList.filter(event => {
      return event.eName.toLocaleLowerCase().concat(` `).concat(event.eLocat.toLocaleLowerCase()).search(value) >= 0
        || event.tempUser.fname.toLocaleLowerCase().concat(` `).concat(event.tempUser.lname.toLocaleLowerCase()).search(value) >= 0
        || STATUS[event.status].search(value) >= 0

    });

  }
}