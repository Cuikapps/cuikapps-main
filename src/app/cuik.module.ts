import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CirclesToRhumbusesSpinnerModule } from 'angular-epic-spinners';

import { CuikComponent } from './cuik.component';
import { HomeComponent } from './views/home/home.component';
import { SupportComponent } from './views/support/support.component';
import { LogService } from './services/log.service';
import { AuthService } from './services/auth.service';

import { ComponentsModule } from './components/components.module';
import { CuikRoutingModule } from './cuik-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

import { ScullyLibModule } from '@scullyio/ng-lib';
import { NewsService } from './services/news.service';
import { FeedbackService } from './services/feedback.service';
import { LoadingService } from './services/loading.service';
import { CookieService } from './services/cookie.service';

@NgModule({
  declarations: [
    CuikComponent,
    HomeComponent,
    SupportComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CuikRoutingModule,
    ComponentsModule,
    BrowserModule,
    ScullyLibModule,
    HttpClientModule,
    CirclesToRhumbusesSpinnerModule,
  ],
  providers: [
    AuthService,
    LogService,
    NewsService,
    FeedbackService,
    LoadingService,
    CookieService,
  ],
  bootstrap: [CuikComponent],
})
export class CuikModule {}
