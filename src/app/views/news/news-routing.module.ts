import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news.component';
import { WebsiteComponent } from './website/website.component';
import { CuikconvertorComponent } from './cuikconvertor/cuikconvertor.component';
import { CompanyNewsComponent } from './company-news/company-news.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    children: [
      { path: 'main', component: CompanyNewsComponent },
      { path: 'website', component: WebsiteComponent },
      { path: 'cuikconvertor', component: CuikconvertorComponent },
      { path: '', redirectTo: 'main', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
