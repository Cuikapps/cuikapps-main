import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cuik-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  titles: string[] = ['Profile', 'Password', 'Danger Zone'];
  routes: string[] = ['./profile', './password', './dangerzone'];

  ngOnInit(): void {}

  get screenWidth(): number {
    return window.innerWidth;
  }
}
