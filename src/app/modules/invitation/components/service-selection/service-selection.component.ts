import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-selection',
  templateUrl: './service-selection.component.html',
  styleUrl: './service-selection.component.scss',
})
export class ServiceSelectionComponent {
  serviceForm!: FormGroup;
  isAnySelected: boolean = false;

  services = [
    {
      key: 'fixedLines',
      label: 'FIRST-TIME-LOGIN.SERVICE-SELECTION.SELECTION-OPTIONS.OPTION-ONE',
    },
    {
      key: 'mobileLines',
      label: 'FIRST-TIME-LOGIN.SERVICE-SELECTION.SELECTION-OPTIONS.OPTION-TWO',
    },
    {
      key: 'adslData',
      label:
        'FIRST-TIME-LOGIN.SERVICE-SELECTION.SELECTION-OPTIONS.OPTION-THREE',
    },
    {
      key: 'devices',
      label: 'FIRST-TIME-LOGIN.SERVICE-SELECTION.SELECTION-OPTIONS.OPTION-FOUR',
    },
  ];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    const formControls = this.services.reduce(
      (controls: { [key: string]: any }, service) => {
        controls[service.key] = [false];
        return controls;
      },
      {}
    );

    this.serviceForm = this.fb.group(formControls);

    this.serviceForm.valueChanges.subscribe((values) => {
      this.isAnySelected = Object.values(values).some(
        (value: any) => value.length > 0
      );
    });
  }

  navigateToTermsAndConditions() {
    localStorage.setItem('invitationAccepted', 'true');
    this.router.navigate(['invitation/terms-and-conditions']);
  }
}
