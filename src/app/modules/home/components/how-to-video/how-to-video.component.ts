import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from '../../../core/services/news.service';
import { INewsItem } from '../../../core/interfaces/news-item.interface';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-how-to-video',
  templateUrl: './how-to-video.component.html',
  styleUrls: ['./how-to-video.component.scss'],
})
export class HowToVideoComponent implements OnInit, OnDestroy {
  videos: INewsItem[] = [];
  private langChangeSubscription!: Subscription;

  constructor(
    private newsService: NewsService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.fetchVideos();
    this.langChangeSubscription = this.translateService.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.fetchVideos();
      }
    );
  }

  fetchVideos(): void {
    this.newsService.getNews().subscribe({
      next: (data) => (this.videos = data),
      error: (err) => console.error('Error fetching videos:', err),
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
