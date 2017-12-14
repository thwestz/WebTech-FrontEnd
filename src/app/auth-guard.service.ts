import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Session } from './Models/session.model';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router,
        private locals : LocalStorageService) { }

 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const session : Session = this.locals.retrieve('token');

        if(session != null){
            return true;
        }else{
            return false;
        }
        
    }


}