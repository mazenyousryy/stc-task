import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss',
})
export class MainHeaderComponent {
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
