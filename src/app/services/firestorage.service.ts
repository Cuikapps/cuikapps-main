import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { IUser } from '../Interfaces/iuser';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class FirestorageService {
  constructor(
    private afStorage: AngularFireStorage,
    private authService: AuthService
  ) {}

  uploadUserImage(file: File) {
    let uid = JSON.parse(localStorage.getItem('user') || '{}').uid;
    this.afStorage.upload(`profileImages/${uid}`, file);

    this.afStorage
      .ref(`profileImages/${uid}`)
      .getDownloadURL()
      .subscribe((url) => {
        this.authService.UpdateUserPhoto(url);
      });
  }
}
