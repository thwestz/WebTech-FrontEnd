import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import {UserService} from '../../services/user.service'

import { Event } from '../../Models/event/event.model';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Session } from '../../Models/session.model';
import { eSign, STATUS } from '../../Models/Event/eSign.model';

@Component({
  selector: 'app-home-event',
  templateUrl: './home-event.component.html',
  styleUrls: ['./home-event.component.css']
})
export class HomeEventComponent implements OnInit {
  event: Event;
  loading: boolean;
  eSign: eSign;
  session: Session;
  registed: boolean = false;
  today: number;
  isFull: boolean;
  org : string;
  constructor(private eventService: EventService, private route: ActivatedRoute, private locals: LocalStorageService,private userService : UserService) { }

  ngOnInit() {
    this.loading = true;
    this.today = new Date().getTime();
    this.session = this.locals.retrieve('token');
    this.eSign = new eSign();
    this.route.params.subscribe(id => {
      this.eventService.getEventByID(id['_id']).subscribe(res => {
        this.event = res;
        this.userService.getUserByID(this.event.userID).subscribe(response =>{
          this.org = response.fname
        })
        if (this.session == null) {
          return;
        }
        this.event.eSign.forEach(res => {
          if (res == null) {
            return;
          }
          if (res.uid === this.session.uid) {
            this.registed = true;
          } else {
            this.registed = false;
          }
        })

        if (this.event.eCap > this.event.eSign.length) {
          this.isFull = false;
        }else {
          this.isFull = true;
        }

        this.loading = false;
      })
    });
  }

  signIn() {
    this.eSign.uid = this.session.uid
    this.eSign.status = STATUS.signIn
    this.event.eSign.push(this.eSign);
    this.eventService.update(this.event).subscribe(res => {
      this.registed = true;
      this.eSign = new eSign();
    })
  }
}
