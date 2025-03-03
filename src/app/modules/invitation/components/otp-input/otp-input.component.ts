import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-otp-input',
  templateUrl: './otp-input.component.html',
  styleUrl: './otp-input.component.scss',
})
export class OtpInputComponent implements OnInit {
  otpForm!: FormGroup;
  @Output() otpVerified = new EventEmitter<string>();

  constructor(
    public translateService: TranslateService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.otpForm = this.fb.group({
      otpCode: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onOtpSubmit() {
    if (this.otpForm.valid) {
      this.otpVerified.emit(this.otpForm.value.otpCode);
    }
  }

  onInput(event: any, events: any) {
    const input = event.target.value;
    if (input.length > 1) {
      event.target.value = input.slice(0, 1);
      events.input(event);
    } else {
      events.input(event);
    }
  }

  resend(): void {}
}
