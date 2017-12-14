import { Component, OnInit, ViewChild } from '@angular/core';
import { Event, STATUS } from '../../../Models/Event/event.model';
import { Detail } from '../../../Models/Event/detail.model';
import { Time } from '../../../Models/Event/time.model';
import { LocalStorageService } from 'ngx-webstorage';
import { Session } from '../../../Models/session.model';
import { UserService } from '../../../services/user.service';
import { FileUploader } from 'ng2-file-upload';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
  providers: [EventService]
})
export class AddEventComponent implements OnInit {
  event: Event;
  sDate: Date[];
  eDate: Date[];
  constructor(private locals: LocalStorageService, private eventService: EventService) { }



  ngOnInit() {

    this.event = new Event();
    this.event.eSubDetail = [];
    this.event.eSubDetail.push(new Detail());
    this.sDate = [];
    this.sDate.push(new Date());
    this.eDate = [];
    this.eDate.push(new Date());

  }

  addDate() {
    this.sDate.push(new Date());
    this.eDate.push(new Date());
  }

  delDate(i) {
    this.sDate.splice(i, 1);
    this.eDate.splice(i, 1);
  }

  addSubDate() {
    this.event.eSubDetail.push(new Detail());
  }

  delSubDate(i) {
    this.event.eSubDetail.splice(i, 1);
  }

  createEvent() {
    this.event.eDate = [];
    for (let i = 0; i < this.sDate.length; i++) {

      this.event.eDate.push(new Time());

      this.event.eDate[i].startDate = this.sDate[i].getTime();
      this.event.eDate[i].startTime = `${this.sDate[i].getHours()}:${this.sDate[i].getMinutes()}`;
      this.event.eDate[i].endDate = this.eDate[i].getTime();
      this.event.eDate[i].endTime = `${this.eDate[i].getHours()}:${this.eDate[i].getMinutes()}`;
    }
    this.event.status = STATUS.pending;

    this.eventService.create(this.event).subscribe(res => {
      this.event = new Event();
      this.event.eDate = [];
      this.event.eSubDetail = [];
      this.event.eSubDetail.push(new Detail());
      this.sDate = [];
      this.sDate.push(new Date());
      this.eDate = [];
      this.eDate.push(new Date());
    })


  }


}
