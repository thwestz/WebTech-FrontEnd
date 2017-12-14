import { Injectable } from "@angular/core";

import { Event } from "../Models/event/event.model";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { Session } from "../Models/session.model";
import { LocalStorageService } from "ngx-webstorage";



@Injectable()
export class EventService {
    private session : Session;
    private basePath: string = `http://localhost:5000/event`;

    constructor(
        private http: HttpClient,private locals : LocalStorageService) { }


    getEvent(): Observable<Event[]> {
        return this.http.get<Event[]>(`${this.basePath}`);
    }

    update(event: Event): Observable<Event> {

        return this.http.put<Event>(`${this.basePath}/update`, (event) );
    }

    create(event : Event) : Observable<Event> {
        this.getSession();
        event.userID = this.session.uid;
        return this.http.post<Event>(`${this.basePath}/create`, (event) );
    }

    getSession() {
        this.session = this.locals.retrieve('token');
    }
}