import { Injectable } from "@angular/core";

import { Event } from "../Models/event/event.model";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";



@Injectable()
export class EventService {

    private basePath: string = `http://localhost:5000/event`;

    constructor(
        private http: HttpClient) { }


    getEvent(): Observable<Event[]> {
        return this.http.get<Event[]>(`${this.basePath}`);
    }
    updateEvent(E: Event): Observable<Event> {
        return this.http.put<Event>(`${this.basePath}/update`,(E));
    }
}