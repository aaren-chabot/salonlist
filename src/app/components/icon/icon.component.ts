import { Component, OnInit, Input } from '@angular/core';
import {
  faLinkedin,
  faTwitter,
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  icons = {
    twitter: faTwitter,
    instagram: faInstagram,
    facebook: faFacebook
  };
  @Input() icon = '';

  constructor() {}

  ngOnInit(): void {
    this.icon = this.icons?.[this.icon];
  }
}
