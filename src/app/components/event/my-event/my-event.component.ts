import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../../services/event.service';
import { Event } from '../../../Models/event/event.model';
import { Session } from '../../../Models/session.model';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-my-event',
  templateUrl: './my-event.component.html',
  styleUrls: ['./my-event.component.css']
})
export class MyEventComponent implements OnInit {
  eventList: Event[];
  eventSearch: Event[];
  loading: boolean;
  eventDetail: Event;
  session: Session;
  barcode: string;
  constructor(private route: ActivatedRoute, private eventService: EventService,
    private locals: LocalStorageService) { }

  ngOnInit() {
    this.loading = true;
    this.session = this.locals.retrieve('token');
    this.route.params.subscribe(id => {
      this.eventService.getEventByUserIDRegisted().subscribe(res => {
        this.eventList = res;
        this.eventSearch = res;
        this.loading = false;
      })
    });
  }

  isEvent(event ) {

    this.eventDetail = event
    this.barcode = `${this.session.uid}?${this.eventDetail._id}`
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
