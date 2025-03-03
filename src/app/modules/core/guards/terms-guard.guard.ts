import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TermsGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const invitationAccepted =
      localStorage.getItem('invitationAccepted') === 'true';

    if (!invitationAccepted) {
      this.router.navigate(['not-found']);
      return false;
    }

    return true;
  }
}
