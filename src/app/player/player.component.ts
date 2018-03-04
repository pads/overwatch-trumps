import { Component, OnDestroy } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ot-player',
  styleUrls: ['./player.component.scss'],
  templateUrl: './player.component.html',
})
export class PlayerComponent implements OnDestroy {
  authStateSubscription: Subscription;
  user: firebase.User | null;

  constructor(private afAuth: AngularFireAuth) {
    this.authStateSubscription = afAuth.authState.subscribe(
      user => (this.user = user),
    );
  }

  ngOnDestroy() {
    if (this.authStateSubscription) {
      this.authStateSubscription.unsubscribe();
    }
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
