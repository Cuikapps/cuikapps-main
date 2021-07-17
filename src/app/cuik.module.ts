import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { CuikComponent } from './cuik.component';
import { HomeComponent } from './views/home/home.component';
import { SupportComponent } from './views/support/support.component';
import { FirestorageService } from './services/firestorage.service';
import { LogService } from './services/log.service';
import { AuthService } from './services/auth.service';

import { ComponentsModule } from './components/components.module';
import { CuikRoutingModule } from './cuik-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { FirestoreService } from './services/firestore.service';

import { ScullyLibModule } from '@scullyio/ng-lib';

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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    CuikRoutingModule,
    ComponentsModule,
    BrowserModule,
    ScullyLibModule,
  ],
  providers: [AuthService, FirestorageService, LogService, FirestoreService],
  bootstrap: [CuikComponent],
})
export class CuikModule {}
