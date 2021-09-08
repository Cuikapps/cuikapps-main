import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AfterContentChecked, OnDestroy } from '@angular/core';
import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cuik-nav-preset',
  templateUrl: './nav-preset.component.html',
  styleUrls: ['./nav-preset.component.scss'],
})
export class NavPresetComponent
  implements OnInit, AfterContentChecked, OnDestroy
{
  constructor(public authService: AuthService, public router: Router) {}

  subscriptions: Subscription[] = [];

  @ViewChild('navList') navList!: HTMLUListElement;
  @Input() pageActive!: string;

  navToggleClass = '';
  loginPanel = false;
  activeRoute = '/sign-in';
  image = '../../../assets/img/account.png';

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.activeRoute = this.router.url;
    } else {
      this.activeRoute = '/sign-in';
    }
  }

  ngAfterContentChecked(): void {
    this.subscriptions[0] = this.authService.storeData.subscribe((value) => {
      if (value?.photoURL && value?.photoURL !== 'No Image') {
        this.image = value?.photoURL;
      } else {
        this.image = '../../../assets/img/account.png';
      }
    });
  }

  toggleNav(e: boolean): void {
    if (!e) {
      this.navToggleClass = 'nav-open';
    } else {
      this.navToggleClass = 'nav-close';
    }
  }

  /** Return whether the logged in user has a profile image */
  get UserHasImage(): boolean {
    if (this.authService.isLoggedIn) {
      if (this.authService.storeData.value?.photoURL) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  setActiveRoute(): void {
    if (this.authService.isLoggedIn) {
      this.activeRoute = '';
    } else {
      this.activeRoute = '/sign-in';
    }
  }

  openLogin(): void {
    if (this.authService.isLoggedIn) {
      this.loginPanel = !this.loginPanel;
    } else {
      return;
    }
  }

  navigateToDash(): void {
    this.router
      .navigate(['/dashboard/profile'])
      .then(() => this.router.navigate(['/dashboard/profile']));
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
