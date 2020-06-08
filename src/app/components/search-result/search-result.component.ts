import { Component, OnInit, Input } from '@angular/core';
import { IBusiness } from '@interfaces/business.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input() business: IBusiness;
  resultImg: string;
  businessAddress: string;

  constructor() {}

  ngOnInit(): void {
    this.resultImg = `url(${this.business.images.hero})`;
    const { street, city, zip } = this.business.address;
    this.businessAddress = `${street}, ${city} ${zip}`;
  }
}
