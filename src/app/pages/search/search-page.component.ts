import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  heading = 'Search Results';
  imgHeight = 300;
  searchQuery: string;

  constructor() {}

  ngOnInit() {}
}
