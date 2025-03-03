import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss',
})
export class ErrorMessageComponent {
  @Output() otpVerified = new EventEmitter<string>();

  constructor(private router: Router) {}

  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      text: new FormControl<string | null>(null),
    });
  }

  navigateErrorPage(): void {
    localStorage.setItem('invitationExpired', 'true');
    this.router.navigate(['invitation/invitation-expired']);
  }
}
