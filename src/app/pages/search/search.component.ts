import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchPageComponent implements OnInit {
  query: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.query = this.route.snapshot.queryParams.query;
    console.log('query', this.query);
  }
}
