import { Injectable, NgZone } from '@angular/core';
import { IUser } from '../Interfaces/iuser';
import firebase from 'firebase';
import 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in local storage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') || '{}');
      } else {
        localStorage.setItem('user', '');
        JSON.parse(localStorage.getItem('user') || '{}');
      }
    });
  }

  SignIn(email: string, password: string) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result: any) => {
        this.ngZone.run(() => {
          this.router.navigate(['']);
        });
        this.SetUserData(result.user);
      })
      .catch((error: Error) => {
        window.alert(error.message);
      });
  }

  // Sign up with email/password
  SignUp(email: string, password: string) {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result: any) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Send email verification when new user sign up
  SendVerificationMail() {
    if (firebase.auth().currentUser != null) {
      return firebase
        .auth()
        .currentUser?.sendEmailVerification()
        .then(() => {
          this.router.navigate(['verify-email-address']);
        });
    } else {
      console.log('No current user found');
      return;
    }
  }

  // Reset Forgot password
  ForgotPassword(passwordResetEmail: string) {
    return firebase
      .auth()
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Returns true when user is logged in and email is verified
  get isLoggedIn(): boolean {
    const unparsedUser = localStorage.getItem('user');
    if (unparsedUser) {
      const user = JSON.parse(unparsedUser);
      return user !== '{}' && user.emailVerified !== false ? true : false;
    } else {
      return false;
    }
  }

  get currentUser() {
    return firebase.auth().currentUser;
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((result: any) => {
        this.ngZone.run(() => {
          this.router.navigate(['']);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: IUser) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: IUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  /* Sign out */
  SignOut() {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['sign-in']);
      });
  }

  DeleteUser() {
    const userID = firebase.auth().currentUser?.uid;

    firebase.auth().currentUser?.delete();
    this.afs.doc(`users/${userID}`).delete();
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }

  UpdateUserName(name: string) {
    let uid = firebase.auth().currentUser?.uid;
    this.afs.doc(`users/${uid}`).update({ displayName: name });

    firebase.auth().currentUser?.updateProfile({ displayName: name });
  }
  UpdateUserPhoto(profileImage: string) {
    let uid = firebase.auth().currentUser?.uid;
    this.afs.doc(`users/${uid}`).update({ photoURL: profileImage });

    firebase.auth().currentUser?.updateProfile({ photoURL: profileImage });
  }
}
