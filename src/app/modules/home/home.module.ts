import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AvatarModule } from 'primeng/avatar';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { CoreModule } from '../core/core.module';
import { TabViewModule } from 'primeng/tabview';
import { TrendComponent } from './components/trend/trend.component';
import { FollowedTopicsComponent } from './components/followed-topics/followed-topics.component';
import { PaginatorModule } from 'primeng/paginator';
import { HowToVideoComponent } from './components/how-to-video/how-to-video.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionAnswerComponent } from './components/question-answer/question-answer.component';
import { AvatarGroupModule } from 'primeng/avatargroup';

@NgModule({
  declarations: [
    HomeComponent,
    TrendComponent,
    FollowedTopicsComponent,
    HowToVideoComponent,
    QuestionComponent,
    QuestionAnswerComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AvatarModule,
    TranslateModule,
    ButtonModule,
    TabViewModule,
    PaginatorModule,
    AvatarGroupModule,
    CoreModule,
  ],
  exports: [FollowedTopicsComponent],
})
export class HomeModule {}
