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
  success : boolean;
  event: Event;
  closeDate: Date;
  sDate: Date[];
  eDate: Date[];
  loading: boolean;
  err: string[];
  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit() {
    this.err = [];
    this.loading = true;
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
        this.loading = false;
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
    this.err = [];
    this.loading = true;
    this.event.eDate = [];

    if (!this.event.eName) {
      this.err.push(`Please fill out this Event Name. !`)
      this.loading = false;
      return;
    }

    if (!this.event.eLocat) {
      this.err.push(`Please fill out this Location. !`)
      this.loading = false;
      return;
    }
    if ((typeof this.event.eCap === 'undefined')) {
      this.err.push(`Please check Capacity. !`)
      this.loading = false;
      return;
    }


    if (!this.event.eName) {
      this.err.push(`Please fill out this Event Name. !`)
      this.loading = false;
      return;
    }

    if (!this.event.eLOGO) {
      this.event.eLOGO = `https://i.imgur.com/rHfm8uj.png`;
      this.loading = false;
      return;
    }

    for (let i = 0; i < this.sDate.length; i++) {

      this.event.eDate.push(new Time());

      this.event.eDate[i].startDate = this.sDate[i].getTime();
      this.event.eDate[i].startTime = `${this.sDate[i].getHours()}:${this.sDate[i].getMinutes()}`;
      this.event.eDate[i].endDate = this.eDate[i].getTime();
      this.event.eDate[i].endTime = `${this.eDate[i].getHours()}:${this.eDate[i].getMinutes()}`;
    }
    this.event.expiredAt = this.closeDate.getTime();
    this.eventService.update(this.event).subscribe(res => {
      this.loading = false;
      this.success = true;
    }), err => {
      this.err.push(`Internal Server Error`)
      this.loading = false;
      return ;
    }
  }
}
