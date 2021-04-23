import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FirestorageService {
  constructor(
    private afStorage: AngularFireStorage,
    private authService: AuthService,
    private router: Router
  ) {}

  uploadUserImage(file: File) {
    if (this.authService.userState) {
      this.afStorage.upload(
        `profileImages/${this.authService.userState.uid}`,
        file
      );

      this.afStorage
        .ref(`profileImages/${this.authService.userState.uid}`)
        .getDownloadURL()
        .toPromise()
        .then((url) => {
          this.authService.PhotoURL = url;
        });
    }
  }
}
