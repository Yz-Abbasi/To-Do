import { Injectable } from '@angular/core';
import { Router,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from '../src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authorization: UserService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
    boolean {
    if(!this.authorization.isLoggedIn()){
      this.router.navigate(['login']);
      return false;
    }
    return this.authorization.isLoggedIn();
  }
}
