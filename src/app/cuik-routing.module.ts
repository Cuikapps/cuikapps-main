import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { SignInComponent } from './views/sign-in/sign-in.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './views/verify-email/verify-email.component';
import { HomeComponent } from './views/home/home.component';
import { SupportComponent } from './views/support/support.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: 'support', component: SupportComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./views/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./views/news/news.module').then((m) => m.NewsModule),
  },

  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CuikRoutingModule {}
