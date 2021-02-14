import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-danger-zone',
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
    if (this.authService.currentUser) {
      if (this.confirmText == this.authService.currentUser.email) {
        alert('Your account has been deleted');
        this.authService.DeleteUser();
      } else {
        alert('Please confirm again');
      }
    }
  }

  openModal() {
    if (this.authService.currentUser) {
      this.userEmail = this.authService.currentUser.email;
    }
    this.warningModality = !this.warningModality;
  }
}
