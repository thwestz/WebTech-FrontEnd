import { Component, OnInit } from '@angular/core';

import { EventService } from '../../services/event.service';
import { Event} from '../../Models/Event/event.model'
import {Detail} from '../../Models/Event/detail.model'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private eventList:infEvent[];
  

  constructor(private eventService:EventService) { }

  ngOnInit() {
    this.eventService.getEvent().subscribe((response) => {
      this.eventList = response;
    })
 
  }
  approve(E){
    E.status=2
    this.eventService.updateEvent(E).subscribe((response) => {
    })
  }
  
 
}

interface infEvent{
  _id:string
  eName: string;
  userID: string;
  eDate: string;
  eLocat: string;
  eDetail: string;
  eCap: number;
  eSubDetail: Detail[];
  status: number;
 }

