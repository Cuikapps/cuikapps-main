import { AfterContentChecked, Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'cuik-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements AfterContentChecked, OnDestroy {
  constructor(public authService: AuthService) {}

  subscriptions: Subscription[] = [];

  displayNameInput = '';
  updatedName: string =
    this.authService.storeData.value?.displayName ??
    // tslint:disable-next-line: quotemark
    "Could not get user's name";

  fileDisplayName = 'Choose a profile image';

  ngAfterContentChecked(): void {
    this.subscriptions[0] = this.authService.storeData.subscribe((value) => {
      if (value?.displayName !== undefined) {
        this.updatedName = value?.displayName;
      }
    });
  }
  changeDisplayFile(input: HTMLInputElement): void {
    if (input.files) {
      this.fileDisplayName = input.files[0].name;
    }
  }

  async setDisplayName(): Promise<void> {
    if (this.authService.storeData) {
      await this.authService.updateUser({ displayName: this.displayNameInput });
    } else {
      alert('Error: Cannot set username');
    }
  }
  async setUserImage(input: HTMLInputElement): Promise<void> {
    if (input.files) {
      if ((input.files[0].size / 1024 / 1024).toFixed(4)) {
        await this.authService.uploadUserImage(input.files[0]);
      } else {
        alert(
          'File size is too big, the image file must be at maximum less than 4 megabytes'
        );
      }
    }
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
