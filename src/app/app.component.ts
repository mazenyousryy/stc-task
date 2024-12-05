import { Component, Inject, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { lang } from './modules/core/enums/lang';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  TranslateService = inject(TranslateService);
  isRtl: Boolean;

  constructor() {
    const savedLang = localStorage.getItem('language') || lang.en;
    this.TranslateService.setDefaultLang(savedLang);
    this.TranslateService.use(savedLang);

    this.isRtl = savedLang === lang.ar;
    this.saveDirection(this.isRtl);

    this.TranslateService.onLangChange.subscribe((event) => {
      this.isRtl = event.lang === lang.ar;

      localStorage.setItem('language', event.lang);
      this.saveDirection(this.isRtl);
    });
  }

  private saveDirection(isRtl: Boolean): void {
    const direction = isRtl ? 'rtl' : 'ltr';
    localStorage.setItem('direction', direction);

    // Optionally, update the document's direction
    document.documentElement.dir = direction;
  }
}
