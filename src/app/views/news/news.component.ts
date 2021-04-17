import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cuik-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  constructor() {}

  titles: string[] = ['Main', 'Website', 'Cuik Convertor'];
  routeWithChildren: boolean = false;

  ngOnInit(): void {}

  get screenWidth() {
    return window.innerWidth;
  }
}
