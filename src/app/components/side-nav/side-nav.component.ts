import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'cuik-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  constructor(public router: Router, private authService: AuthService) {}

  @Input('titles') sideNavTitles!: string[];
  @Input('routes') sideNavRoutes!: string[];
  @Input() hasProfileImage!: boolean;

  image: string = '../../../assets/img/account.png';
  sideNavToggle: boolean = false;

  ngOnInit(): void {
    if (this.screenWidth <= 500) {
      this.sideNavToggle = !this.sideNavToggle;
    }
  }

  ngAfterContentChecked() {
    if (this.authService.PhotoURL) {
      this.image = this.authService.PhotoURL;
    } else this.image = '../../../assets/img/account.png';
  }

  updateImage() {
    if (this.authService.PhotoURL) this.image = this.authService.PhotoURL;
  }

  toggleSideNav() {
    this.sideNavToggle = !this.sideNavToggle;
  }

  checkActiveRoute(routes: string[], index: number): boolean {
    if (
      this.router.url.includes(routes[index].replace('./', '')) &&
      ((): boolean => {
        for (let i = 1; i < routes.length; i++) {
          if (
            this.router.url.includes(
              routes[i].replace('../', '').replace('./', '')
            )
          )
            return true;
          else return false;
        }
        return true;
      })
    )
      return true;
    return false;
  }

  get screenWidth() {
    return window.innerWidth;
  }
}
