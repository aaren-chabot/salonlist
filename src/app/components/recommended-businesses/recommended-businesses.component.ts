import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommended-businesses',
  templateUrl: './recommended-businesses.component.html',
  styleUrls: ['./recommended-businesses.component.scss']
})
export class RecommendedBusinessesComponent implements OnInit {
  suggestion: 'popularity';
  sectionTitle: 'Most popular';

  constructor() {}

  ngOnInit() {}
}
