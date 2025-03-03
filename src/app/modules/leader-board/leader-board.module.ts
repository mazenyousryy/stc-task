import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaderBoardRoutingModule } from './leader-board-routing.module';
import { LeaderBoardComponent } from './pages/leader-board/leader-board.component';
import { CoreModule } from '../core/core.module';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

import { BadgePointsComponent } from './components/badge-points/badge-points.component';
import { TabViewModule } from 'primeng/tabview';
import { ActivitiesPointsComponent } from './components/activities-points/activities-points.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    LeaderBoardComponent,
    BadgePointsComponent,
    ActivitiesPointsComponent,
  ],
  imports: [
    CommonModule,
    LeaderBoardRoutingModule,
    TranslateModule,
    CoreModule,
    ButtonModule,
    TabViewModule,
    TableModule,
  ],
})
export class LeaderBoardModule {}
