import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { lang } from '../../enums/lang';

@Component({
  selector: 'app-invitation-header',
  templateUrl: './invitation-header.component.html',
  styleUrl: './invitation-header.component.scss',
})
export class InvitationHeaderComponent {
  translateService = inject(TranslateService);
  currentLang = localStorage.getItem('language') || 'en';

  changeLang() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';

    this.translateService.setDefaultLang(this.currentLang);
    this.translateService.use(this.currentLang);

    localStorage.setItem('language', this.currentLang);

    const isRtl = this.currentLang === 'ar';
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', this.currentLang);
  }
}
