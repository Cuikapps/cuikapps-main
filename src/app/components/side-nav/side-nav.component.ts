import {
  AfterContentChecked,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'cuik-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent
  implements OnInit, AfterContentChecked, OnDestroy
{
  constructor(public router: Router, private authService: AuthService) {}

  subscriptions: Subscription[] = [];

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
    this.subscriptions[0] = this.authService.storeData.subscribe((value) => {
      if (value?.photoURL && value?.photoURL !== 'No Image') {
        this.image = value?.photoURL;
      } else {
        this.image = '../../../assets/img/account.png';
      }
    });
  }

  toggleSideNav(): void {
    this.sideNavToggle = !this.sideNavToggle;
  }

  get screenWidth(): number {
    return window.innerWidth;
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
