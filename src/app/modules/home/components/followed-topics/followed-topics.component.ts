import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from '../../../core/services/news.service';
import { INewsItem } from '../../../core/interfaces/news-item.interface';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-followed-topics',
  templateUrl: './followed-topics.component.html',
  styleUrls: ['./followed-topics.component.scss'],
})
export class FollowedTopicsComponent implements OnInit, OnDestroy {
  allQuestions: INewsItem[] = [];
  paginatedQuestions: INewsItem[] = [];
  currentPage: number = 0;
  itemsPerPage: number = 5;
  private langChangeSubscription!: Subscription;

  constructor(
    private newsService: NewsService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.loadQuestions();
    this.langChangeSubscription = this.translateService.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.loadQuestions();
      }
    );
  }

  loadQuestions(): void {
    this.newsService.getNews().subscribe({
      next: (data: INewsItem[]) => {
        this.allQuestions = data;
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
    this.paginatedQuestions = this.allQuestions.slice(start, end);
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
