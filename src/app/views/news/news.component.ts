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

  titles = ['Main', 'Website', 'Cuik Convertor', 'Apptray'];
  routes = ['./main', './website', './cuik-convertor', './apptray'];

  ngOnInit(): void {}

  get screenWidth(): number {
    return window.innerWidth;
  }
}
