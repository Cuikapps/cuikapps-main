import { Component, OnInit } from '@angular/core';

export const TITLES: string[] = [
  'Main',
  'Website',
  'Cuik Convertor',
  'Apptray',
];

@Component({
  selector: 'cuik-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  constructor() {}

  titles = TITLES;
  routeWithChildren = false;

  ngOnInit(): void {}

  get screenWidth(): number {
    return window.innerWidth;
  }
}
