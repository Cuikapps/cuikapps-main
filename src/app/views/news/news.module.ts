import { NgModule } from '@angular/core';

import { NewsRoutingModule } from './news-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { NewsComponent } from './news.component';
import { CommonModule } from '@angular/common';
import { ChangeLogComponent } from './change-log/change-log.component';

@NgModule({
  declarations: [NewsComponent, ChangeLogComponent],
  imports: [ComponentsModule, NewsRoutingModule, CommonModule],
})
export class NewsModule {}
