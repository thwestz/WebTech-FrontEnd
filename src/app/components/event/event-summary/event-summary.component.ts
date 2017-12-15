import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../../services/event.service';
import { Event } from '../../../Models/event/event.model';
import { User } from '../../../Models/user.model';
import { UserService } from '../../../services/user.service';
import { eSign } from '../../../Models/event/eSign.model';

@Component({
  selector: 'app-event-summary',
  templateUrl: './event-summary.component.html',
  styleUrls: ['./event-summary.component.css']
})
export class EventSummaryComponent implements OnInit {
  QRCode: string;
  loading: boolean;
  event: Event;
  userList: User[]
  err : string[] = [];
  success : boolean;
  constructor(private route: ActivatedRoute, private eventService: EventService, private userService: UserService) { }

  ngOnInit() {
    this.loading = true;
    this.userList = [];
    this.route.params.subscribe(id => {
      this.eventService.getEventByID(id['_id']).subscribe(res => {
        this.event = res;
        this.event.eSign.forEach(user => {
          this.userService.getUserByID(user.uid).subscribe(res => {
            res.tempEStatus = user.status;
            this.userList.push(res);
            this.loading = false;
          })
        })
      })
    })
  }

  updateStatus() {
    this.err = [];
    this.success = false;
    this.loading = true;
    this.event.eSign.forEach(eSign => {
      if (eSign._id === this.QRCode) {
        if(eSign.status == 1){
          this.err.push(`Duplicate QRCode. !`)
          this.loading = false;
          return ;
        }
        eSign.status = 1;
        this.userList = [];
        this.eventService.update(this.event).subscribe(res => {
          this.route.params.subscribe(id => {
            this.eventService.getEventByID(id['_id']).subscribe(res => {
              this.event = res;
              this.event.eSign.forEach(user => {
                this.userService.getUserByID(user.uid).subscribe(res => {
                  res.tempEStatus = user.status;
                  this.userList.push(res);
                  this.success = true;
                  this.loading = false;
                })
              })
            })
          })
        })
      }else {
        this.err.push("Error : Wrong QRCode Please try again. !");
        this.loading = false;
      }
    });
  }

}
