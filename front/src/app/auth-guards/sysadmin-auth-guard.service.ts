import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'AuthToken';

@Injectable()
export class SysadminAuthGuard implements CanActivate {
  tokenPayload = null;

  constructor() {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(sessionStorage.getItem(TOKEN_KEY)===null){
      return false;
    }
    else{
      this.tokenPayload = jwt_decode(sessionStorage.getItem(TOKEN_KEY));
      if(this.tokenPayload.scopes[0].authority === "ROLE_ADMIN"){
        return true;
      }
      else{
        return false;
      }
    }
  }
}
