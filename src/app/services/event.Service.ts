import { Injectable } from "@angular/core";

import { User } from "../Models/user.model";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { LocalStorageService } from "ngx-webstorage";
import { Event } from "../Models/Event/event.model";
import { Session } from "../Models/session.model";



@Injectable()
export class EventService {

    private basePath: string = `http://localhost:5000/event`;
    private session : Session
    constructor(
        private http: HttpClient
        , private local: LocalStorageService) { }


    create(event: Event): Observable<Event> {
        this.getSession();
        event.userID = this.session.uid;
        return this.http.post<Event>(`${this.basePath}/create`, (event))
    }

    getSession() {
        this.session = this.local.retrieve('token');
    }
}