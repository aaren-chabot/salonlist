import { Component, OnInit, Input } from '@angular/core';
import {
  faTwitter,
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  icons = {
    twitter: faTwitter,
    instagram: faInstagram,
    facebook: faFacebook,
    check: faCheck
  };
  @Input() icon = '';

  constructor() {}

  ngOnInit(): void {
    this.icon = this.icons?.[this.icon];
  }
}
