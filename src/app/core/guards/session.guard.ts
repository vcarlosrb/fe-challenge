import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { InformationComponent } from "src/app/virsize/information/information.component";
import { UserService } from "../services/user.service";

@Injectable()
export class SessionGuard implements CanActivate {
    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        const session = this.userService.checkSession();
        if (!session) this.router.navigate([InformationComponent.pathName]);
        
        return true;
    }
}