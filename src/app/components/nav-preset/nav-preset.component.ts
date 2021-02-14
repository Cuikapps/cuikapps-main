import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-preset',
  templateUrl: './nav-preset.component.html',
  styleUrls: ['./nav-preset.component.scss'],
})
export class NavPresetComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}

  @ViewChild('navList') navList!: HTMLUListElement;
  @Input() pageActive!: string;

  navToggleClass: string = '';
  loginPanel: boolean = false;
  activeRoute: string = '/sign-in';
  image!: string;

  ngOnInit(): void {
    let temp = this.getLoggedIn;
  }

  toggleNav(e: boolean) {
    if (!e) {
      this.navToggleClass = 'nav-open';
    } else {
      this.navToggleClass = 'nav-close';
    }
  }

  get getLoggedIn() {
    if (this.authService.isLoggedIn) {
      this.image = JSON.parse(localStorage.getItem('user') || '{}').photoURL;
    }
    return this.authService.isLoggedIn;
  }

  get userHasImage() {
    if (this.getLoggedIn) {
      if (JSON.parse(localStorage.getItem('user') || '{}').photoURL) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  setActiveRoute() {
    if (this.getLoggedIn) {
      this.activeRoute = this.router.url;
    } else {
      this.activeRoute = '/sign-in';
    }
  }
  openLogin(): void {
    if (this.getLoggedIn) {
      this.loginPanel = !this.loginPanel;
    } else {
      return;
    }
  }
}
