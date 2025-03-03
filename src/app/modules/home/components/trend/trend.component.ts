import { Component, OnInit, OnDestroy } from '@angular/core';
import { INewsItem } from '../../../core/interfaces/news-item.interface';
import { NewsService } from '../../../core/services/news.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.scss'],
})
export class TrendComponent implements OnInit, OnDestroy {
  newsItems: INewsItem[] = []; // Full list of news items
  paginatedItems: INewsItem[] = []; // Items for the current page
  currentPage: number = 0; // Current page index
  itemsPerPage: number = 5; // Number of items per page
  private langChangeSubscription!: Subscription;

  constructor(
    private newsService: NewsService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.loadNews();
    this.langChangeSubscription = this.translateService.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.loadNews();
      }
    );
  }

  loadNews(): void {
    this.newsService.getNews().subscribe({
      next: (data) => {
        this.newsItems = data;
        this.updatePagination();
      },
      error: (err) => {
        console.error('Error fetching news:', err);
      },
    });
  }

  onPageChange(event: any): void {
    this.currentPage = event.page;
    this.updatePagination();
  }

  updatePagination(): void {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedItems = this.newsItems.slice(start, end);
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
