import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'cuik-root',
  templateUrl: './cuik.component.html',
  styleUrls: ['./cuik.component.scss'],
})
export class CuikComponent implements OnInit, OnDestroy {
  title = 'cuikapps-main';

  appLoading = false;

  subscriptions: Subscription[] = [];

  constructor(
    public readonly router: Router,
    public readonly loading: LoadingService
  ) {}
  ngOnInit(): void {
    this.subscriptions[0] = this.loading.appIsLoading.subscribe(
      (appLoading) => {
        this.appLoading = appLoading;
      }
    );
  }
  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
