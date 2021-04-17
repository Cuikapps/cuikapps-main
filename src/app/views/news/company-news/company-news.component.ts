import { Component, OnInit } from '@angular/core';
import { changelogs } from '../../../data/changelogs.json';
import { IChangeLogs } from '../../../Interfaces/IChangeLog';

@Component({
  selector: 'cuik-company-news',
  templateUrl: './company-news.component.html',
  styleUrls: ['./company-news.component.scss'],
})
export class CompanyNewsComponent implements OnInit {
  constructor() {}

  news: IChangeLogs = changelogs.news;

  ngOnInit(): void {}
}
