import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../Interfaces/iuser';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUpdateUser } from '../Interfaces/IUpdateUser';
import { AuthURLs } from '../EApiUrls';
import { LoadingService } from './loading.service';
import { CookieService } from './cookie.service';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  storeData: BehaviorSubject<IUser | null> = new BehaviorSubject<IUser | null>(
    null
  );
  isVerified = false;

  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': 'https://cuikapps.uc.r.appspot.com',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS',
  });

  constructor(
    private readonly router: Router,
    private readonly http: HttpClient,
    private readonly loading: LoadingService,
    private readonly cookie: CookieService
  ) {
    if (this.isLoggedIn) {
      this.getStoreData();
    }
  }

  async signIn(email: string, password: string): Promise<void> {
    try {
      await this.loading.load<void>(async () => {
        await this.http
          .post<void>(
            environment.apiURL + AuthURLs.SIGN_IN,
            {
              email,
              password,
            },
            { withCredentials: true }
          )
          .toPromise();

        this.cookie.setCookie('isLoggedIn', 'true', 30 * 24 * 60 * 60);
        localStorage.setItem('current-email', email);
      });
    } catch (error) {
      this.cookie.deleteCookie('isLoggedIn');
      alert('Either Password or Email was entered incorrectly');
      console.error(error);
    }

    await this.getStoreData();

    this.router.navigate(['/']);
  }

  async getStoreData(): Promise<void> {
    try {
      const user = await this.loading.load<IUser | null>(async () => {
        if (this.isLoggedIn) {
          return this.http
            .get<IUser>(environment.apiURL + AuthURLs.GET_USER, {
              headers: this.headers,
              withCredentials: true,
            })
            .toPromise();
        } else {
          return null;
        }
      });
      this.storeData.next(user);
    } catch (error) {
      console.error(error);
    }
  }

  get isLoggedIn(): boolean {
    if (this.cookie.getCookie('isLoggedIn')) {
      return true;
    } else {
      return false;
    }
  }

  async signUp(email: string, password: string): Promise<void> {
    try {
      const res = await this.loading.load<string>(() => {
        const result = this.http
          .post(
            environment.apiURL + AuthURLs.SIGN_UP,
            {
              email,
              password,
            },
            {
              headers: this.headers,
              responseType: 'text',
            }
          )
          .toPromise();
        localStorage.setItem('current-email', email);
        return result;
      });

      if (res === 'User Created') {
        this.router.navigate(['/verify-email-address']);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async forgotPassword(email: string, newPassword: string): Promise<void> {
    try {
      await this.loading.load<void>(() => {
        return this.http
          .post<void>(
            environment.apiURL + AuthURLs.RESET_PASS,
            {
              email,
              newPassword,
            },
            {
              headers: this.headers,
              withCredentials: true,
            }
          )
          .toPromise();
      });
    } catch (error) {
      console.error(error);
    }
  }

  async signOut(): Promise<void> {
    try {
      await this.loading.load(async () => {
        await this.http
          .post(
            environment.apiURL + AuthURLs.SIGN_OUT,
            {},
            { withCredentials: true }
          )
          .toPromise();
        this.cookie.deleteCookie('isLoggedIn');
        await this.getStoreData();
      });

      this.router.navigate(['sign-in']);
    } catch (error) {
      console.error(error);
    }
  }

  async uploadUserImage(file: File): Promise<void> {
    const splitName = file.name.split('.');
    const fileExtension: string = splitName[splitName.length - 1];
    const fileReader = new FileReader();

    if (this.storeData.value) {
      try {
        await this.loading.load(async () => {
          await this.http
            .post<void>(
              environment.apiURL + AuthURLs.UPLOAD_PROFILE,
              {
                formData: {
                  file_buffer: await this.readFile(file),
                  type: fileExtension,
                },
              },
              {
                headers: this.headers,
                withCredentials: true,
              }
            )
            .toPromise();

          await this.getStoreData();
        });
      } catch (error) {
        console.error(error);
      }
    }
  }

  readFile(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = () => {
        if (reader.result) {
          let encoded = reader.result.toString().replace(/^data:(.*,)?/, '');
          // if (encoded.length % 4 > 0) {
          //   encoded += '='.repeat(4 - (encoded.length % 4));
          // }
          resolve(reader.result as string);
        }
      };
      reader.onerror = (error) => reject(error);
    });
  }

  async updateUser(userData: IUpdateUser): Promise<void> {
    try {
      await this.loading.load(async () => {
        await this.http
          .post(environment.apiURL + AuthURLs.UPDATE_USER, userData, {
            headers: this.headers,
            withCredentials: true,
          })
          .toPromise();
        await this.getStoreData();
      });
    } catch (error) {
      console.error(error);
    }
  }

  async reconfirmEmail(): Promise<void> {
    try {
      await this.loading.load(async () => {
        if (
          this.storeData.value?.email ||
          localStorage.getItem('current-email')
        ) {
          await this.http
            .post(
              environment.apiURL +
                AuthURLs.CONFIRM_EMAIL +
                `?email=${
                  this.storeData.value?.email ??
                  localStorage.getItem('current-email') ??
                  ''
                }`,
              {
                headers: this.headers,
                withCredentials: true,
              }
            )
            .toPromise();
        }
      });
    } catch (error) {
      alert('Failed to send user email confirmation.');
      console.error(error);
    }
  }

  async deleteUser(): Promise<void> {
    try {
      await this.loading.load(async () => {
        await this.http
          .delete(environment.apiURL + AuthURLs.DELETE_USER, {
            headers: this.headers,
            withCredentials: true,
          })
          .toPromise();
        await this.signOut();
        await this.getStoreData();
      });
    } catch (error) {
      console.error(error);
    }
  }
}
