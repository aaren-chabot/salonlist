import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private city: BehaviorSubject<string> = new BehaviorSubject('Toronto');

  setCity = (city: string): void => {
    this.city.next(city);
  };

  getCity = (): Observable<string> => {
    return this.city.asObservable();
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
