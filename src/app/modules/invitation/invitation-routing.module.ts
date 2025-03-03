import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstTimeLoginComponent } from './pages/first-time-login/first-time-login.component';
import { AcceptTermsComponent } from './pages/accept-terms/accept-terms.component';
import { DeclinedInvitationComponent } from './pages/declined-invitation/declined-invitation.component';
import { TermsGuard } from '../core/guards/terms-guard.guard';
import { BlockExpiredInvitationGuard } from '../core/guards/expired-invitation.guard';
import { InvitationGuard } from '../core/guards/invitation-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: FirstTimeLoginComponent,
    canActivate: [InvitationGuard],
  },
  {
    path: 'terms-and-conditions',
    component: AcceptTermsComponent,
    canActivate: [TermsGuard],
  },
  {
    path: 'invitation-expired',
    component: DeclinedInvitationComponent,
    canActivate: [BlockExpiredInvitationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitationRoutingModule {}
