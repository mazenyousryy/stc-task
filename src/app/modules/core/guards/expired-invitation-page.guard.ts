import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ExpiredInvitationPageGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('invitationExpired')) {
      this.router.navigate(['invitation/invitation-expired']);
      return false;
    }

    return true;
  }
}
