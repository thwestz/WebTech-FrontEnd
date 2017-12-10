import { Injectable } from "@angular/core";

import { User } from "../Models/user.model";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";



@Injectable()
export class UserService {

    private basePath: string = `http://localhost:5000/users`;

    constructor(
        private http: HttpClient) { }


    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.basePath}`);
    }
    create(user: User): Observable<User> {
        return this.http.post<User>(`${this.basePath}/create`, JSON.stringify(user));
    }

}