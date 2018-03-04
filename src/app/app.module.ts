import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AngularFireModule } from 'angularfire2';

import { environment } from '@environments/environment';

import { PlatformService } from '@app/platform/platform.service';
import { PlayerModule } from '@app/player/player.module';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'overwatch-trumps'),
    AngularFirestoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    PlayerModule,
    environment.production
      ? ServiceWorkerModule.register('/ngsw-worker.js')
      : [],
  ],
  providers: [PlatformService],
  bootstrap: [AppComponent],
})
export class AppModule {}
