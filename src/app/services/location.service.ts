import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  city: BehaviorSubject<string> = new BehaviorSubject('Toronto');

  setCity = (city: string) => {
    this.city.next(city);
  };

  initLocation = (): void => {
    const storedCity = localStorage.getItem('city');
    if (storedCity) {
      this.city.next(storedCity);
      console.log('Stored City: ', storedCity);
      return;
    }

    fetch('https://extreme-ip-lookup.com/json/')
      .then((response) => response.json())
      .then((location) => this.city.next(location.city));
    console.log('IP City: ', this.city.getValue());
    localStorage.setItem('city', this.city.getValue());
  };
}
