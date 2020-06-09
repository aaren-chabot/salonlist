import { Component, OnInit } from '@angular/core';
import { BusinessesService } from '@services/businesses.service';
import { SearchService } from '@services/search/search.service';
import { IBusiness } from '@interfaces/business.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  heading = 'Search Results';
  imgHeight = 300;
  searchResults: IBusiness[];
  searchTerm: Observable<string>;
  searchView: 'list' | 'grid' = 'list';

  constructor(
    private businessesService: BusinessesService,
    private searchService: SearchService
  ) {}

  toggleResultsView = (e, view) => {
    this.searchView = view;
  };

  ngOnInit() {
    this.businessesService.getFeaturedSalons().subscribe((results) => {
      this.searchResults = results;
    });
    this.searchTerm = this.searchService.getSearchQuery();
  }
}
