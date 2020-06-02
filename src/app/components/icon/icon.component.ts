import { Component, OnInit, Input } from '@angular/core';
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faGoogle,
  faLinkedin
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
    google: faGoogle,
    linkedin: faLinkedin,
    check: faCheck
  };
  @Input() icon = '';

  constructor() {}

  ngOnInit(): void {
    this.icon = this.icons?.[this.icon];
  }
}
