import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { IUser } from '../../../Interfaces/iuser';
import { FirestorageService } from '../../../services/firestorage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private storageService: FirestorageService
  ) {}

  displayName: string = '';
  updatedName: string = '';

  ngOnInit(): void {
    this.updatedName = JSON.parse(
      localStorage.getItem('user') || '{}'
    ).displayName;
  }

  get user(): IUser {
    return {
      uid: this.authService.currentUser?.uid || '',
      email: this.authService.currentUser?.email || '',
      displayName: this.authService.currentUser?.displayName || '',
      photoURL: this.authService.currentUser?.photoURL || '',
      emailVerified: this.authService.currentUser?.emailVerified || false,
    };
  }

  setDisplayName() {
    this.authService.UpdateUserName(this.displayName);
    alert(
      'You display name has been changed, but to see it you must refresh the browser. You might have to refresh two times.'
    );
  }
  setUserImage(input: HTMLInputElement) {
    if ((input.files![0].size / 1024 / 1024).toFixed(4)) {
      this.storageService.uploadUserImage(input.files![0]);
    } else {
      alert(
        'File size is too big, the image file must be at maximum less than 4 megabytes'
      );
    }
  }
}
