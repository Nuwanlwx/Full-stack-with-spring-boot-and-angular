import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService  implements CanActivate{

  constructor(
    private hardCodedAuth: HardcodedAuthenticationService,
    private router:Router
    ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    
    if (this.hardCodedAuth.isUserLoggedIn()) {
    return true;
    this.router.navigate(['login'])
    } else {
      return false;
    }
  }
}
