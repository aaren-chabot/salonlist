import { Injectable } from '@angular/core';
import { IBusiness } from '@interfaces/business.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessesService {
  private barbers: BehaviorSubject<IBusiness[]> = new BehaviorSubject([
    {
      type: 'barber',
      name: 'Barber 1',
      address: '400 York Blvd, Toronto, ON M5V 3Z3',
      image: 'https://placeimg.com/550/302/people',
      isFeatured: true,
      rating: 3.5,
      link: ''
    },
    {
      type: 'barber',
      name: 'Hair Salon 2',
      address: '140 King St, Toronto, ON M5V 3Z3',
      image: 'https://placeimg.com/550/300/arch',
      isFeatured: false,
      rating: 4.5,
      link: ''
    },
    {
      type: 'barber',
      name: 'Hair Salon 3',
      address: '900 Front York Blvd, Toronto, ON M5V 3Z3',
      image: 'https://placeimg.com/550/301/people',
      isFeatured: false,
      rating: 5.0,
      link: ''
    }
  ]);
  private salons: BehaviorSubject<IBusiness[]> = new BehaviorSubject([
    {
      type: 'salon',
      name: 'Evolve Hair Studio',
      address: '40 Fort York Blvd, Toronto, ON M5V 3Z3',
      image: 'https://placeimg.com/550/301/arch',
      isFeatured: true,
      rating: 3.5,
      link: ''
    },
    {
      type: 'salon',
      name: 'Hair Salon 2',
      address: '140 Front York Blvd, Toronto, ON M5V 3Z3',
      image: 'https://placeimg.com/550/300/people',
      isFeatured: false,
      rating: 4.5,
      link: ''
    },
    {
      type: 'salon',
      name: 'Hair Salon 3',
      address: '90 Fort York Blvd, Toronto, ON M5V 3Z3',
      image: 'https://placeimg.com/550/300/arch',
      isFeatured: false,
      rating: 4.0,
      link: ''
    }
  ]);

  getFeaturedBarbers(): Observable<IBusiness[]> {
    return this.barbers.asObservable();
  }
  getFeaturedSalons(): Observable<IBusiness[]> {
    return this.salons.asObservable();
  }
}