import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IChangeLogs } from 'src/app/Interfaces/IChangeLog';

import { changelogs as changelogsJSON } from '../../../data/changelogs.json';
import { TITLES } from '../news.component';

@Component({
  selector: 'cuik-change-log',
  templateUrl: './change-log.component.html',
  styleUrls: ['./change-log.component.scss'],
})
export class ChangeLogComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute) {}

  changelogs!: IChangeLogs;
  title!: string;

  typedChangeLogs: IChangeLogs[] = changelogsJSON;

  subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.paramMap.subscribe((map) => {
        const changelogRouteIndex = map.get('changelog');

        if (changelogRouteIndex) {
          const changelogIndex = parseFloat(changelogRouteIndex);
          this.changelogs = this.typedChangeLogs[changelogIndex];
          this.title = TITLES[changelogIndex];
        }
      })
    );
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
