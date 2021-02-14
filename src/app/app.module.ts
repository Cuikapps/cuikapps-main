import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SupportComponent } from './views/support/support.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavPresetComponent } from './components/nav-preset/nav-preset.component';
import { RegionComponent } from './components/region/region.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { BurgerComponent } from './components/burger/burger.component';
import { FeedbackCardComponent } from './components/feedback-card/feedback-card.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { PasswordComponent } from './components/dashboard/password/password.component';
import { DangerZoneComponent } from './components/dashboard/danger-zone/danger-zone.component';
import { FirestorageService } from './services/firestorage.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SupportComponent,
    PageNotFoundComponent,
    NavPresetComponent,
    RegionComponent,
    ProductCardComponent,
    BurgerComponent,
    FeedbackCardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent,
    ProfileComponent,
    PasswordComponent,
    DangerZoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAnalyticsModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [AuthService, FirestorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
