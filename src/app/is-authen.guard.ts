import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenGuard implements CanActivate {
  constructor( public router: Router,
               private loginService: LoginService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const abc = true;
    if (!abc) {
      this.router.navigate(['login']);
    }
    return true;
  }

}
