import { NavPresetComponent } from './nav-preset/nav-preset.component';
import { RegionComponent } from './region/region.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { BurgerComponent } from './burger/burger.component';
import { FeedbackCardComponent } from './feedback-card/feedback-card.component';
import { VerifyEmailComponent } from '../views/verify-email/verify-email.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChangelogViewerComponent } from './changelog-viewer/changelog-viewer.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  declarations: [
    NavPresetComponent,
    RegionComponent,
    ProductCardComponent,
    BurgerComponent,
    FeedbackCardComponent,
    VerifyEmailComponent,
    FooterComponent,
    SideNavComponent,
    ChangelogViewerComponent,
  ],
  exports: [
    NavPresetComponent,
    RegionComponent,
    ProductCardComponent,
    BurgerComponent,
    FeedbackCardComponent,
    VerifyEmailComponent,
    FooterComponent,
    SideNavComponent,
    FormsModule,
    ChangelogViewerComponent,
  ],
  providers: [],
  bootstrap: [],
})
export class ComponentsModule {}
