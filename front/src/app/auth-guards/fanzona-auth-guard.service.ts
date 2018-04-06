import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'AuthToken';


@Injectable()
export class FanzonaAuthGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(sessionStorage.getItem(TOKEN_KEY)===null){
      return false;
    }
    else{
      return true;
    }
  }
}
