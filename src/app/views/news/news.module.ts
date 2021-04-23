import { NgModule } from '@angular/core';

import { NewsRoutingModule } from './news-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { NewsComponent } from './news.component';
import { WebsiteComponent } from './website/website.component';
import { CuikconvertorComponent } from './cuikconvertor/cuikconvertor.component';
import { CompanyNewsComponent } from './company-news/company-news.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NewsComponent,
    WebsiteComponent,
    CuikconvertorComponent,
    CompanyNewsComponent,
  ],
  imports: [ComponentsModule, NewsRoutingModule, CommonModule],
})
export class NewsModule {}
