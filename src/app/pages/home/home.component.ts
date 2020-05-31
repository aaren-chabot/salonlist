import { Component, OnInit } from '@angular/core';
import { BusinessesService } from '@services/businesses.service';
import { LocationService } from '@services/location.service';

import { Business } from '@interfaces/business.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePageComponent implements OnInit {
  barbersTitle = 'Top barbers in...';
  salonsTitle = 'Top salons in...';
  featuredSalons: Business[];
  featuredBarbers: Business[];
  visitorCity: Promise<string>;

  constructor(
    public businessesService: BusinessesService,
    public locationService: LocationService
  ) {}

  ngOnInit() {
    this.featuredSalons = this.businessesService.getFeaturedSalons();
    this.featuredBarbers = this.businessesService.getFeaturedBarbers();
    this.visitorCity = this.locationService.getVisitorCity();
  }
}
