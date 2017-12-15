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
  QRCode: string;
  today : number
  constructor(private route: ActivatedRoute, private eventService: EventService,
    private locals: LocalStorageService) { }

  ngOnInit() {
    this.loading = true;
    this.today = new Date().getTime();
    this.session = this.locals.retrieve('token');
    this.eventService.getEventByUserIDRegisted().subscribe(res => {
      this.eventList = res;
      this.eventSearch = res;
      this.loading = false;
    })
  }

  isEvent(event) {
    this.eventDetail = event
    this.eventDetail.eSign.forEach(user => {
      if (user.uid == this.session.uid) {
        this.QRCode = user._id;
      }
    })
  }

  cancel() {
    for (let i = 0; i < this.eventDetail.eSign.length; i++) {
      if (this.eventDetail.eSign[i].uid == this.session.uid) {
        this.eventDetail.eSign.splice(i, 1)
        break;
      }
    }
    this.eventService.update(this.eventDetail).subscribe(res => {
      this.eventService.getEventByUserIDRegisted().subscribe(res => {
        this.eventList = res;
        this.eventSearch = res;
      })
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


    });

  }
}
