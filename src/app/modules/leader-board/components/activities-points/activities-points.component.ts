import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-activities-points',
  templateUrl: './activities-points.component.html',
  styleUrl: './activities-points.component.scss',
})
export class ActivitiesPointsComponent implements OnInit, OnDestroy {
  activityPoints: { activity: string; points: string }[] = [];
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
    this.activityPoints = [
      {
        activity: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-ACTIVITIES-AND-POINTS.LEADERBOARD-ACTIVITIES-AND-POINTS-ASK'
        ),
        points: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-ACTIVITIES-AND-POINTS.POINTS.POINTS-100'
        ),
      },
      {
        activity: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-ACTIVITIES-AND-POINTS.LEADERBOARD-ACTIVITIES-AND-POINTS-SURVEY'
        ),
        points: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-ACTIVITIES-AND-POINTS.POINTS.POINTS-200'
        ),
      },
      {
        activity: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-ACTIVITIES-AND-POINTS.LEADERBOARD-ACTIVITIES-AND-POINTS-FOLLOW'
        ),
        points: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-ACTIVITIES-AND-POINTS.POINTS.POINTS-40'
        ),
      },
      {
        activity: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-ACTIVITIES-AND-POINTS.LEADERBOARD-ACTIVITIES-AND-POINTS-ANSWER'
        ),
        points: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-ACTIVITIES-AND-POINTS.POINTS.POINTS-80'
        ),
      },
      {
        activity: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-ACTIVITIES-AND-POINTS.LEADERBOARD-ACTIVITIES-AND-POINTS-FIRST'
        ),
        points: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-ACTIVITIES-AND-POINTS.POINTS.POINTS-55'
        ),
      },
      {
        activity: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-ACTIVITIES-AND-POINTS.LEADERBOARD-ACTIVITIES-AND-POINTS-FEEDBACK'
        ),
        points: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-ACTIVITIES-AND-POINTS.POINTS.POINTS-17'
        ),
      },
      {
        activity: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-ACTIVITIES-AND-POINTS.LEADERBOARD-ACTIVITIES-AND-POINTS-REPLY'
        ),
        points: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-ACTIVITIES-AND-POINTS.POINTS.POINTS-20'
        ),
      },
      {
        activity: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-ACTIVITIES-AND-POINTS.LEADERBOARD-ACTIVITIES-AND-POINTS-REACT'
        ),
        points: this.translateService.instant(
          'LEADERBOARD.LEADERBOARD-ACTIVITIES-AND-POINTS.POINTS.POINTS-15'
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
