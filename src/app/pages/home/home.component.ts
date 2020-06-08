import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BusinessesService } from '@services/businesses.service';
import { LocationService } from '@services/location/location.service';
import { IBusiness } from '@interfaces/business.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePageComponent implements OnInit {
  city$: Observable<string>;
  featSalons$: Observable<IBusiness[]>;
  featBarbers$: Observable<IBusiness[]>;
  barbersTitle = `Top barbers near you`;
  salonsTitle = `Top salons in near you`;

  constructor(
    public businessesService: BusinessesService,
    public locationService: LocationService
  ) {}

  ngOnInit(): void {
    this.locationService.initLocation();
    this.city$ = this.locationService.getCity();
    this.featSalons$ = this.businessesService.getFeaturedSalons();
    this.featBarbers$ = this.businessesService.getFeaturedBarbers();
  }
}
