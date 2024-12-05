import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountHeaderComponent } from './modules/core/components/account-header/account-header.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { lang } from './modules/core/enums/lang';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    TranslateModule.forRoot({
      defaultLanguage: lang.en,
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
