import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'cuik-danger-zone',
  templateUrl: './danger-zone.component.html',
  styleUrls: ['./danger-zone.component.scss'],
})
export class DangerZoneComponent implements OnInit {
  constructor(public authService: AuthService) {}

  @ViewChild('modal') modal!: HTMLButtonElement;

  userEmail: string | null = '';
  confirmText: string = '';
  warningModality: boolean = false;

  ngOnInit(): void {}

  deleteUserAccount() {
    if (this.authService.isLoggedIn) {
      if (this.confirmText == this.authService.Email) {
        this.authService.DeleteUser();
        alert('Your account has been deleted');
      } else {
        alert('Please confirm again');
      }
    }
  }

  openModal() {
    if (this.authService.isLoggedIn) {
      this.userEmail = this.authService.Email;
    }
    this.warningModality = !this.warningModality;
  }
}
