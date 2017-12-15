import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { STATUS, Event } from '../../Models/Event/event.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private eventList: Event[];
  loading : boolean;


  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.loading = true;
    this.eventService.getEventByStatus(1).subscribe((response) => {
      this.eventList = response;
      this.loading = false;
    })
  }
}
