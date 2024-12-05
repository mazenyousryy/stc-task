import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BlockExpiredInvitationGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isInvitationExpired = localStorage.getItem('invitationExpired');

    if (!isInvitationExpired) {
      this.router.navigate(['not-found']);
      return false;
    }

    return true;
  }
}
