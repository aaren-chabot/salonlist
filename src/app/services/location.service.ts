import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  getVisitorCity = async () => {
    const response = await (
      await fetch('https://extreme-ip-lookup.com/json/')
    ).json();

    return response.city;
  };
}
