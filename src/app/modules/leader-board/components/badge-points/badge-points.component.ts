import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-badge-points',
  templateUrl: './badge-points.component.html',
  styleUrl: './badge-points.component.scss',
})
export class BadgePointsComponent implements OnInit, OnDestroy {
  badgePoints: {
    icon: string; // Path to icon
    user: string; // User level
    points: string; // Points range
    badge: string; // Badge label (e.g., "Earned badge")
    badgeClass: string; // CSS class for badge styling
    description: string; // Eligible for description
  }[] = [];
  private langChangeSubscription!: Subscription;

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.loadTranslations();

    this.langChangeSubscription = this.translateService.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.loadTranslations();
      }
    );
  }

  loadTranslations(): void {
    this.badgePoints = [
      {
        icon: './assets/svgs/achievement-icon.svg',
        user: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-BADGE-POINTS.LEADERBOARD-BADGE-POINTS-LEVEL.LEADERBOARD-BADGE-POINTS-LEVEL-BEGINNER-USER'
        ),
        points: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-BADGE-POINTS.LEADERBOARD-BADGE-POINTS-LEVEL.LEADERBOARD-BADGE-POINTS-LEVEL-BEGINNER-USER-PTS'
        ),
        badge: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-BADGE-POINTS.LEADERBOARD-BADGE-POINTS-LEVEL.LEADERBOARD-BADGE-POINTS-LEVEL-BEGINNER-USER-BADGE'
        ),
        badgeClass: 'badge-earned',
        description: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-BADGE-POINTS.LEADERBOARD-BADGE-POINTS-ELIGIBLE.LEADERBOARD-BADGE-POINTS-LEVEL-BEGINNER-USER'
        ),
      },
      {
        icon: './assets/svgs/advanced-user-icon.svg',
        user: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-BADGE-POINTS.LEADERBOARD-BADGE-POINTS-LEVEL.LEADERBOARD-BADGE-POINTS-LEVEL-ADVANCED-USER'
        ),
        points: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-BADGE-POINTS.LEADERBOARD-BADGE-POINTS-LEVEL.LEADERBOARD-BADGE-POINTS-LEVEL-ADVANCED-USER-PTS'
        ),
        badge: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-BADGE-POINTS.LEADERBOARD-BADGE-POINTS-LEVEL.LEADERBOARD-BADGE-POINTS-LEVEL-ADVANCED-USER-BADGE'
        ),
        badgeClass: 'badge-coming',
        description: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-BADGE-POINTS.LEADERBOARD-BADGE-POINTS-ELIGIBLE.LEADERBOARD-BADGE-POINTS-LEVEL-ADVANCED-USER'
        ),
      },
      {
        icon: './assets/svgs/influencer-user-icon.svg',
        user: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-BADGE-POINTS.LEADERBOARD-BADGE-POINTS-LEVEL.LEADERBOARD-BADGE-POINTS-LEVEL-INFLUENCER-USER'
        ),
        points: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-BADGE-POINTS.LEADERBOARD-BADGE-POINTS-LEVEL.LEADERBOARD-BADGE-POINTS-LEVEL-INFLUENCER-USER-PTS'
        ),
        badge: '',
        badgeClass: '',
        description: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-BADGE-POINTS.LEADERBOARD-BADGE-POINTS-ELIGIBLE.LEADERBOARD-BADGE-POINTS-LEVEL-INFLUENCER-USER'
        ),
      },
      {
        icon: './assets/svgs/tafani-user-icon.svg',
        user: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-BADGE-POINTS.LEADERBOARD-BADGE-POINTS-LEVEL.LEADERBOARD-BADGE-POINTS-LEVEL-TAFANI-USER'
        ),
        points: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-BADGE-POINTS.LEADERBOARD-BADGE-POINTS-LEVEL.LEADERBOARD-BADGE-POINTS-LEVEL-TAFANI-USER-PTS'
        ),
        badge: '',
        badgeClass: '',
        description: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-BADGE-POINTS.LEADERBOARD-BADGE-POINTS-ELIGIBLE.LEADERBOARD-BADGE-POINTS-LEVEL-TAFANI-USER'
        ),
      },
    ];
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
