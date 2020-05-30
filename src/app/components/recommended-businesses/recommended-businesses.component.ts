import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recommended-businesses',
  templateUrl: './recommended-businesses.component.html',
  styleUrls: ['./recommended-businesses.component.scss']
})
export class RecommendedBusinessesComponent implements OnInit {
  @Input() businesses = [];
  @Input() title = '';

  constructor() {}

  ngOnInit() {}
}
