import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitationLayoutComponent } from './modules/core/layout/invitation-layout/invitation-layout.component';
import { MainLayoutComponent } from './modules/core/layout/main-layout/main-layout.component';
import { NotFoundComponent } from './modules/core/pages/not-found/not-found.component';
import { InvitationGuard } from './modules/core/guards/invitation-guard.guard';
import { InvitationAcceptedGuard } from './modules/core/guards/invitation-accepted.guard';

const routes: Routes = [
  {
    path: 'invitation',
    component: InvitationLayoutComponent,
    loadChildren: () =>
      import('./modules/invitation/invitation.module').then(
        (m) => m.InvitationModule
      ),
    canActivate: [InvitationGuard],
  },
  {
    path: 'account',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
        canActivate: [InvitationAcceptedGuard],
      },
      {
        path: 'leader-board',
        loadChildren: () =>
          import('./modules/leader-board/leader-board.module').then(
            (m) => m.LeaderBoardModule
          ),
        canActivate: [InvitationAcceptedGuard],
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'invitation',
    pathMatch: 'full',
  },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
