import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PlayerComponent } from '@app/player/player.component';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  imports: [
    AngularFireAuthModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [PlayerComponent],
  exports: [PlayerComponent],
})
export class PlayerModule {}
