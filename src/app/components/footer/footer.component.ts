import { Component, OnInit } from '@angular/core';

import { LocationService } from '@services/location/location.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  city$: Observable<string>;
  serviceCities = [
    'Toronto',
    'Forest Hill',
    'Yorkville',
    'Mississauga',
    'Scarborough',
    'Etobicoke'
  ];

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.city$ = this.locationService.getCity();
  }
}
