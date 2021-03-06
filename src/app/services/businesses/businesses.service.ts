import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBusiness } from '@interfaces/business.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessesService {
  private featBarbers: BehaviorSubject<IBusiness[]> = new BehaviorSubject([]);
  private featSalons: BehaviorSubject<IBusiness[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {}

  getFeaturedBarbers(): Observable<IBusiness[]> {
    this.http
      .get<{ data: IBusiness[] }>('http://localhost:5000/api/businesses')
      .subscribe((response) => {
        const filteredResponse = response.data.filter(
          (biz) => biz.type === 'barber'
        );
        this.featBarbers.next(filteredResponse);
      });
    return this.featBarbers.asObservable();
  }

  getFeaturedSalons(): Observable<IBusiness[]> {
    this.http
      .get<{ data: IBusiness[] }>('http://localhost:5000/api/businesses')
      .subscribe((response) => {
        const filteredResponse = response.data.filter(
          (biz) => biz.type === 'salon'
        );
        this.featSalons.next(filteredResponse);
      });
    return this.featSalons.asObservable();
  }
}
