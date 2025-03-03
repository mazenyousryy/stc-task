import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'customRelativeTime',
})
export class CustomRelativeTimePipe implements PipeTransform {
  constructor(private translateService: TranslateService) {}
  transform(publishedAt: string): string {
    const publishedDate = new Date(publishedAt);
    const now = new Date();
    const diffInMs = now.getTime() - publishedDate.getTime();
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

    if (diffInHours < 24) {
      return this.translateService.instant(
        'HOME-PAGE.HOME-PAGE-NEWS-TREND.HOME-PAGE-NEWS-TREND-DATES.HOME-PAGE-NEWS-TREND-DATES-TODAY'
      );
    } else if (diffInHours < 48) {
      return this.translateService.instant(
        'HOME-PAGE.HOME-PAGE-NEWS.HOME-PAGE-NEWS-TREND.HOME-PAGE-NEWS-TREND-DATES.HOME-PAGE-NEWS-TREND-DATES-DAY-AGO'
      );
    } else {
      const days = Math.floor(diffInHours / 24);
      return this.translateService.instant(
        'HOME-PAGE.HOME-PAGE-NEWS.HOME-PAGE-NEWS-TREND.HOME-PAGE-NEWS-TREND-DATES.HOME-PAGE-NEWS-TREND-DATES-DAYS-AGO',
        { days }
      );
    }
  }
}
