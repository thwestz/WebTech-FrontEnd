import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../../services/event.service';
import { Event } from '../../../Models/Event/event.model';
import { Detail } from '../../../Models/Event/detail.model';
import { Time } from '../../../Models/Event/time.model';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  event: Event;
  closeDate : Date;
  sDate: Date[];
  eDate: Date[];
  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit() {
    this.sDate = [];
    this.eDate = [];
    this.event = new Event();
    this.route.params.subscribe(id => {
      this.eventService.getEventByID(id['_id']).subscribe(res => {
        this.event = res;
        this.closeDate = new Date(this.event.expiredAt);
        this.event.eDate.forEach(date => {
          this.sDate.push(new Date(date.startDate));
          this.eDate.push(new Date(date.endDate));
        })
      })
    });
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

  updateEvent() {
    this.event.eDate = [];
    for (let i = 0; i < this.sDate.length; i++) {

      this.event.eDate.push(new Time());

      this.event.eDate[i].startDate = this.sDate[i].getTime();
      this.event.eDate[i].startTime = `${this.sDate[i].getHours()}:${this.sDate[i].getMinutes()}`;
      this.event.eDate[i].endDate = this.eDate[i].getTime();
      this.event.eDate[i].endTime = `${this.eDate[i].getHours()}:${this.eDate[i].getMinutes()}`;
    }
    this.event.expiredAt = this.closeDate.getTime();
    this.eventService.update(this.event).subscribe(res => {
      alert('done')
    })
  }
}
