import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'cuik-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit(): void {
    if (
      confirm(
        'This site uses cookie for authentication, if you want to login, then you must agree to cookies.'
      )
    ) {
    } else {
      this.router.navigate(['/']);
    }
  }
}
