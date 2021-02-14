import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  image!: string;
  sideNavToggle: boolean = false;

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('user') || '{}').photoURL) {
      this.image = JSON.parse(localStorage.getItem('user') || '{}').photoURL;
    } else {
      this.image = '../../../assets/img/account.png';
    }

    if (this.screenWidth <= 500) {
      this.sideNavToggle = !this.sideNavToggle;
    }
  }

  updateImage() {
    this.image = JSON.parse(localStorage.getItem('user') || '{}').photoURL;
  }

  toggleSideNav() {
    this.sideNavToggle = !this.sideNavToggle;
  }

  get screenWidth() {
    return window.innerWidth;
  }
}
