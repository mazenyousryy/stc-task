import { BadgePointsComponent } from './components/badge-points/badge-points.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderBoardComponent } from './pages/leader-board/leader-board.component';

const routes: Routes = [
  {
    path: '',
    component: LeaderBoardComponent,
    children: [
      {
        path: '',
        redirectTo: 'activities',
        pathMatch: 'full',
      },

      {
        path: 'badge-points',
        component: BadgePointsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaderBoardRoutingModule {}
