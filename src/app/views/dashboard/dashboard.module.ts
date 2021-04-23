import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { DangerZoneComponent } from './danger-zone/danger-zone.component';
import { PasswordComponent } from './password/password.component';
import { DashboardComponent } from './dashboard.component';
import { ComponentsModule } from '../../components/components.module';
import { CommonModule } from '@angular/common';
import { DashboardGuard } from './dashboard.guard';

@NgModule({
  declarations: [
    ProfileComponent,
    DangerZoneComponent,
    PasswordComponent,
    DashboardComponent,
  ],
  imports: [DashboardRoutingModule, ComponentsModule, CommonModule],
  providers: [DashboardGuard],
})
export class DashboardModule {}
