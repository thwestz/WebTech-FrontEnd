import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Session } from './Models/session.model';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router,
        private locals: LocalStorageService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const session: Session = this.locals.retrieve('token');
        let today: Date = new Date();
        if (session != null) {
            this.authService.getSession(session._id).subscribe(sessionServer => {
                if (session.status != sessionServer.status) {
                    this.router.navigate(["/home"]);
                    this.locals.clear();
                    return false;
                }
                if (session.expiredAt < today.getTime()) {
                    this.router.navigate(["/home"]);
                    this.locals.clear();
                }
            })
            return true;
        } else {
            return false;
        }

    }


}