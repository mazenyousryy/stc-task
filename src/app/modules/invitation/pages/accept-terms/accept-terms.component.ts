import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-accept-terms',
  templateUrl: './accept-terms.component.html',
  styleUrl: './accept-terms.component.scss',
})
export class AcceptTermsComponent implements OnInit {
  constructor(private router: Router, private translate: TranslateService) {}
  items: MenuItem[] | undefined;
  private langChangeSubscription!: Subscription;

  ngOnInit(): void {
    this.setBreadcrumb();
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.setBreadcrumb();
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  setBreadcrumb(): void {
    this.items = [
      {
        label: this.translate.instant(
          'TERMS-AND-CONDITIONS.BREADCRUMB.PREV-LINKS.LINK-ONE'
        ),
        route: '/invitation',
      },
      {
        label: this.translate.instant(
          'TERMS-AND-CONDITIONS.BREADCRUMB.CURRENT-LINK'
        ),
      },
    ];
  }

  navigateToHome(): void {
    this.router.navigate(['account/home']);
  }
}
