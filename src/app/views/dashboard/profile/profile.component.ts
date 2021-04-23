import { AfterContentChecked, Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FirestorageService } from '../../../services/firestorage.service';

@Component({
  selector: 'cuik-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements AfterContentChecked {
  constructor(
    public authService: AuthService,
    private storageService: FirestorageService
  ) {}

  displayNameInput: string = '';
  updatedName: string = this.authService.DisplayName;

  ngAfterContentChecked(): void {
    if (this.authService.DisplayName != '')
      this.updatedName = this.authService.DisplayName;
  }

  setDisplayName() {
    this.authService.DisplayName = this.displayNameInput;
  }
  setUserImage(input: HTMLInputElement) {
    if (input.files) {
      if ((input.files[0].size / 1024 / 1024).toFixed(4))
        this.storageService.uploadUserImage(input.files[0]);
      else
        alert(
          'File size is too big, the image file must be at maximum less than 4 megabytes'
        );
    }
  }
}
