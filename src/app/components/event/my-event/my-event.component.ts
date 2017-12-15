import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../../services/event.service';
import { Event } from '../../../Models/event/event.model';

@Component({
  selector: 'app-my-event',
  templateUrl: './my-event.component.html',
  styleUrls: ['./my-event.component.css']
})
export class MyEventComponent implements OnInit {
  eventList: Event[];
  eventSearch: Event[];
  loading: boolean;
  eventDetail : Event;
  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe(id => {
      this.eventService.getEventByUserIDRegisted().subscribe(res => {
        this.eventList = res;
        this.eventSearch = res;
        this.loading = false;
      })
    });
  }


  search(value: string) {
    if (!value) {
      this.eventSearch = this.eventList;
      return;
    }

    value = value.trim().toLowerCase().replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
    this.eventSearch = this.eventList.filter(event => {
      return event.eName.toLocaleLowerCase().concat(` `).concat(event.eLocat.toLocaleLowerCase()).search(value) >= 0


    });

  }
}
