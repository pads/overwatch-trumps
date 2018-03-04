import { Component, OnDestroy } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import { Platform } from '@app/platform/platform.component';
import { PlatformService } from '@app/platform/platform.service';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { DocumentData } from '@firebase/firestore-types';

@Component({
  selector: 'ot-player',
  styleUrls: ['./player.component.scss'],
  templateUrl: './player.component.html',
})
export class PlayerComponent implements OnDestroy {
  authStateSubscription: Subscription;
  user: firebase.User | null;
  userPlatform$: Observable<DocumentData | undefined>;

  constructor(
    private afAuth: AngularFireAuth,
    private platformService: PlatformService,
  ) {
    this.authStateSubscription = afAuth.authState.subscribe(user => {
      this.user = user;
      if (this.user) {
        this.userPlatform$ = platformService.fetch(this.user.uid);
      }
    });
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
