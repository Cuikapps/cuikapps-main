import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news.component';
import { ChangeLogComponent } from './change-log/change-log.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    children: [
      { path: ':changelog', component: ChangeLogComponent },
      { path: '', redirectTo: 'main', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
