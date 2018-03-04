import { Component, Input, OnChanges } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PlatformService } from '@app/platform/platform.service';

export class Platform {
  platform = '';
  username = '';
}

@Component({
  selector: 'ot-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss'],
})
export class PlatformComponent implements OnChanges {
  @Input() uid: string;

  selectedPlatform: Platform = {
    username: '',
    platform: '',
  };
  platforms = ['psn', 'pc', 'xbl'];
  options: FormGroup;

  constructor(
    private fb: FormBuilder,
    private platformService: PlatformService,
  ) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      platform: ['', Validators.required],
      username: ['', Validators.required],
    });
  }

  ngOnChanges() {
    this.options.reset({
      platform: this.selectedPlatform.platform,
      username: this.selectedPlatform.username,
    });
  }

  submit() {
    const platformModel = this.options.value;
    this.selectedPlatform = {
      platform: platformModel.platform,
      username: platformModel.username,
    };
    this.platformService.save(this.uid, this.selectedPlatform);
    this.ngOnChanges();
  }
}
