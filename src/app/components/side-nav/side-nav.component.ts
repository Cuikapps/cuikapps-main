import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'cuik-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit, AfterContentChecked {
  constructor(public router: Router, private authService: AuthService) {}

  @Input('titles') sideNavTitles!: string[];
  @Input('routes') sideNavRoutes!: string[];
  @Input() hasProfileImage = false;

  // Whether to send to name of route or index.
  @Input() useIndex = false;

  image = '../../../assets/img/account.png';
  sideNavToggle = false;

  ngOnInit(): void {
    if (this.screenWidth <= 500) {
      this.sideNavToggle = !this.sideNavToggle;
    }
  }

  ngAfterContentChecked(): void {
    if (this.authService.PhotoURL) {
      this.image = this.authService.PhotoURL;
    } else {
      this.image = '../../../assets/img/account.png';
    }
  }

  updateImage(): void {
    if (this.authService.PhotoURL) {
      this.image = this.authService.PhotoURL;
    }
  }

  toggleSideNav(): void {
    this.sideNavToggle = !this.sideNavToggle;
  }

  get screenWidth(): number {
    return window.innerWidth;
  }
}
