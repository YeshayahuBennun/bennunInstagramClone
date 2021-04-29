import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Auth } from "./auth.service";

@Injectable()
export class AuthenticationGuard implements CanActivate{

    constructor(private auth:Auth){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        return this.auth.isAuthenticated()
    }

}