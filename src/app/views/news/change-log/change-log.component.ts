import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IChangeLogs } from 'src/app/Interfaces/IChangeLog';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'cuik-change-log',
  templateUrl: './change-log.component.html',
  styleUrls: ['./change-log.component.scss'],
})
export class ChangeLogComponent implements OnInit, OnDestroy {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly news: NewsService
  ) {}

  changelogs!: IChangeLogs;
  title!: string;
  query!: string;

  subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.paramMap.subscribe((map) => {
        const changelogRoute = map.get('changelog');

        if (changelogRoute) {
          this.query = changelogRoute;
          this.news.get(changelogRoute).then((changelogs: IChangeLogs) => {
            this.changelogs = changelogs;
            this.title = this.capitalize(this.query.replace('./', ''));
          });
        }
      })
    );
  }

  capitalize(sentence: string): string {
    let words = [''];
    if (sentence.includes('-')) {
      words = sentence.split('-');
    } else {
      words = [sentence];
    }
    let capitalized = '';

    for (const word of words) {
      const splitWord = word.split('');

      splitWord[0] = splitWord[0].toUpperCase();

      capitalized += splitWord.join('') + ' ';
    }

    return capitalized;
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
