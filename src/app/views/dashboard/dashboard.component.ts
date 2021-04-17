import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cuik-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  titles: string[] = ['Profile', 'Password', 'Danger Zone'];

  ngOnInit(): void {}

  get screenWidth() {
    return window.innerWidth;
  }
}
