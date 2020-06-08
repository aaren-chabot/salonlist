import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchQuery: BehaviorSubject<string> = new BehaviorSubject(null);

  setSearchQuery = (query: string) => {
    this.searchQuery.next(query);
  };

  getSearchQuery = () => {
    return this.searchQuery.asObservable();
  };

  constructor() {}
}
