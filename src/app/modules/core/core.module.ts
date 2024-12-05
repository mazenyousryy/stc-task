import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { lang } from './enums/lang';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { InvitationHeaderComponent } from './components/invitation-header/invitation-header.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { AsideComponent } from './components/aside/aside.component';
import { InvitationLayoutComponent } from './layout/invitation-layout/invitation-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ButtonModule } from 'primeng/button';
import { AccountHeaderComponent } from './components/account-header/account-header.component';
import { AvatarModule } from 'primeng/avatar';
import { CustomRelativeTimePipe } from './pipes/custom-relative-time.pipe';
import { CustomTitlePipe } from './pipes/custom-title.pipe';

@NgModule({
  declarations: [
    InvitationHeaderComponent,
    MainHeaderComponent,
    AsideComponent,
    InvitationLayoutComponent,
    MainLayoutComponent,
    NotFoundComponent,
    AccountHeaderComponent,
    CustomRelativeTimePipe,
    CustomTitlePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ButtonModule,
    AvatarModule,
  ],
  providers: [provideHttpClient()],
  exports: [
    InvitationHeaderComponent,
    MainHeaderComponent,
    AsideComponent,
    InvitationLayoutComponent,
    MainLayoutComponent,
    NotFoundComponent,
    AccountHeaderComponent,
    CustomRelativeTimePipe,
    CustomTitlePipe,
  ],
})
export class CoreModule {}
