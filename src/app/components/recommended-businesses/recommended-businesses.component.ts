import { Component, OnInit, Input } from '@angular/core';

import { IBusiness } from '@interfaces/business.model';

@Component({
  selector: 'app-recommended-businesses',
  templateUrl: './recommended-businesses.component.html',
  styleUrls: ['./recommended-businesses.component.scss']
})
export class RecommendedBusinessesComponent implements OnInit {
  @Input() businesses: IBusiness[];
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
