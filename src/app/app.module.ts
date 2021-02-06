import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SupportComponent } from './support/support.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavPresetComponent } from './nav-preset/nav-preset.component';
import { RegionComponent } from './region/region.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { BurgerComponent } from './nav-preset/burger/burger.component';
import { FeedbackCardComponent } from './support/feedback-card/feedback-card.component';
import { FormsModule } from '@angular/forms';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '404', component: PageNotFoundComponent },
      { path: '', component: HomeComponent },
      { path: 'support', component: SupportComponent },
      { path: '**', component: PageNotFoundComponent },
    ]),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
