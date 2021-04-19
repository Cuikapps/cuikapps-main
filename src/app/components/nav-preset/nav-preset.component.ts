import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AfterContentChecked } from '@angular/core';
import { Component, Input, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'cuik-nav-preset',
  templateUrl: './nav-preset.component.html',
  styleUrls: ['./nav-preset.component.scss'],
})
export class NavPresetComponent implements OnInit, AfterContentChecked {
  constructor(public authService: AuthService, public router: Router) {}

  @ViewChild('navList') navList!: HTMLUListElement;
  @Input() pageActive!: string;

  navToggleClass: string = '';
  loginPanel: boolean = false;
  activeRoute: string = '/sign-in';
  image: string = '../../../assets/img/account.png';

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.activeRoute = this.router.url;
    } else {
      this.activeRoute = '/sign-in';
    }
  }

  ngAfterContentChecked() {
    if (this.authService.PhotoURL) {
      this.image = this.authService.PhotoURL;
    } else this.image = '../../../assets/img/account.png';
  }

  toggleNav(e: boolean) {
    if (!e) {
      this.navToggleClass = 'nav-open';
    } else {
      this.navToggleClass = 'nav-close';
    }
  }

  get UserHasImage() {
    if (this.authService.isLoggedIn) {
      if (this.authService.PhotoURL) return true;
      else return false;
    }
    return false;
  }

  setActiveRoute() {
    if (this.authService.isLoggedIn) {
      this.activeRoute = '';
    } else {
      this.activeRoute = '/sign-in';
    }
  }
  openLogin(): void {
    if (this.authService.isLoggedIn) {
      this.loginPanel = !this.loginPanel;
    } else return;
  }
  navigateToDash() {
    this.router
      .navigate(['/dashboard/profile'])
      .then(() => this.router.navigate(['/dashboard/profile']));
  }
}
