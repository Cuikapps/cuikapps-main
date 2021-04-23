import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { PasswordComponent } from './password/password.component';
import { DangerZoneComponent } from './danger-zone/danger-zone.component';
import { DashboardGuard } from './dashboard.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [DashboardGuard],
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'password', component: PasswordComponent },
      { path: 'dangerzone', component: DangerZoneComponent },
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
