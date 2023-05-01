import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { ConnectionService } from "../services/connection.service";

@Injectable({
  providedIn: "root",
})
export class ConnectionGuard implements CanActivate {
  constructor(
    private connectionService: ConnectionService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!route.url.length && !this.connectionService.isConnected())
      this.router.navigate(["/login"]);

    if (
      route.url.length &&
      route.url[0].path !== "login" &&
      route.url[0].path !== "register" &&
      !this.connectionService.isConnected()
    )
      this.router.navigate(["/login"]);

    if (
      route.url.length &&
      (route.url[0].path === "login" || route.url[0].path === "register") &&
      this.connectionService.isConnected()
    )
      this.router.navigate(["/"]);

    return true;
  }
}
