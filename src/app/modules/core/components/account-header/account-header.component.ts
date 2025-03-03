import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-account-header',
  templateUrl: './account-header.component.html',
  styleUrl: './account-header.component.scss',
})
export class AccountHeaderComponent {
  @Input() avatarImage: string = 'assets/images/user-img.jpg';
  @Input() textColor: string = '#FF375E';
  @Input() badgeImage: string = 'assets/svgs/premium-badge-icon.svg';
  @Input() badgeText!: string;

  constructor(public translate: TranslateModule) {}
}
