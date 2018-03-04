import { Injectable } from '@angular/core';
import { Platform } from '@app/platform/platform.component';
import { DocumentData } from '@firebase/firestore-types';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlatformService {
  private userPlatformDoc: AngularFirestoreDocument<Platform>;

  constructor(private db: AngularFirestore) {}

  fetch(uid: string): Observable<DocumentData | undefined> {
    return Observable.fromPromise(
      this.db
        .collection('platforms')
        .doc<Platform>(uid)
        .ref.get(),
    ).map(snapshot => snapshot.data());
  }

  save(uid: string, platform: Platform) {
    this.userPlatformDoc = this.db.doc<Platform>(`platforms/${uid}`);
    this.userPlatformDoc.set(platform);
  }
}
