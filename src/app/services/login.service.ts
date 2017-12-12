import { Injectable } from "@angular/core";

import { User } from "../Models/user.model";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";



@Injectable()
export class LoginService {

    private basePath: string = `http://localhost:5000/auth`;

    constructor(
        private http: HttpClient) { }


    signIn(email : string , password : string): Observable<User> {
        return this.http.post<User>(`${this.basePath}`, {email,password});
    }

}