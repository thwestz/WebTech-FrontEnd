import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { Event, STATUS } from '../../../Models/Event/event.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private eventService: EventService, private userService: UserService) { }
  eventList: Event[];
  eventSearch: Event[];
  loading: boolean;
  ngOnInit() {
    this.loading = true;
    this.eventList = [];
    this.eventSearch = [];
    this.eventService.getEventByUserID().subscribe(res => {
      this.eventList = res;
      this.eventSearch = res;
      this.loading = false
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

        || STATUS[event.status].search(value) >= 0

    });

  }
}
