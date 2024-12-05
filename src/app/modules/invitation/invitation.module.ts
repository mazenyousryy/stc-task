import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitationRoutingModule } from './invitation-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { FirstTimeLoginComponent } from './pages/first-time-login/first-time-login.component';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { CheckboxModule } from 'primeng/checkbox';
import { ServiceSelectionComponent } from './components/service-selection/service-selection.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputOtpModule } from 'primeng/inputotp';
import { OtpInputComponent } from './components/otp-input/otp-input.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AcceptTermsComponent } from './pages/accept-terms/accept-terms.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { DeclinedInvitationComponent } from './pages/declined-invitation/declined-invitation.component';

@NgModule({
  declarations: [
    FirstTimeLoginComponent,
    OtpInputComponent,
    ServiceSelectionComponent,
    AcceptTermsComponent,
    DeclinedInvitationComponent,
    ErrorMessageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InvitationRoutingModule,
    RouterModule,
    TranslateModule,
    CardModule,
    ButtonModule,
    AvatarModule,
    ButtonModule,
    CheckboxModule,
    DialogModule,
    InputOtpModule,
    BreadcrumbModule,
  ],
})
export class InvitationModule {}
