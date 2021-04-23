import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'cuik-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    alert('You must refresh the page for your account to be created.');
  }
}
