import { Injectable, EventEmitter } from "@angular/core";

import { User } from "../Models/user.model";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { LocalStorageService } from "ngx-webstorage";
import { Session } from "../Models/session.model";
import { Router } from "@angular/router";




@Injectable()
export class AuthService {

    private basePath: string = `http://localhost:5000/auth`;

    constructor(
        private http: HttpClient,private localSt:LocalStorageService,private router : Router) { }


    signIn(email : string , password : string): Observable<User> {
        return this.http.post<User>(`${this.basePath}`, {email,password});
    }

    getSession(id : string) : Observable<Session>{
        return this.http.get<Session>(`${this.basePath}/${id}`);
    }
    session : Session
    sessionToggle: EventEmitter<Session> = new EventEmitter<Session>();

    logout(){
        this.localSt.clear();
        this.session = this.localSt.retrieve('token');
        this.sessionToggle.emit(this.session);
        this.router.navigate(['./home'])
    }
    
}