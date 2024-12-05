import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-first-time-login',
  templateUrl: './first-time-login.component.html',
  styleUrl: './first-time-login.component.scss',
})
export class FirstTimeLoginComponent {
  otpDialogVisible: boolean = false;
  notInterestedDialogVisible: boolean = false;
  serviceDialogVisible: boolean = false;

  constructor(public translateService: TranslateService) {}

  showOtpDialog(): void {
    localStorage.getItem('invitationAccepted') ||
    localStorage.getItem('invitationExpired')
      ? alert('This Invitation has been used before')
      : (this.otpDialogVisible = true);
  }

  showNotInterestedDialog(): void {
    localStorage.getItem('invitationAccepted') ||
    localStorage.getItem('invitationExpired')
      ? alert('This Invitation has been used before')
      : (this.notInterestedDialogVisible = true);
  }

  onOtpVerified(): void {
    this.otpDialogVisible = false;
    this.serviceDialogVisible = true;
  }

  onServicesClosed() {
    this.serviceDialogVisible = false;
  }

  onErrorMsgVerified(): void {
    this.notInterestedDialogVisible = false;
  }
}
