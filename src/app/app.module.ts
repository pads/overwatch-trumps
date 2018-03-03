import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '@environments/environment';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'overwatch-trumps'),
    AngularFireAuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    environment.production
      ? ServiceWorkerModule.register('/ngsw-worker.js')
      : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
