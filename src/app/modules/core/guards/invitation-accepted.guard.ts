import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvitationAcceptedGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const invitationAccepted = localStorage.getItem('invitationAccepted');
    if (invitationAccepted === 'true') {
      return true;
    } else {
      this.router.navigate(['/invitation']);
      return false;
    }
  }
}
