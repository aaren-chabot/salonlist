import { Component, OnInit, Input } from '@angular/core';

import { IBusiness } from '@interfaces/business.model';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})
export class BusinessCardComponent implements OnInit {
  @Input() business: IBusiness;
  businessAddress: string;

  constructor() {}

  ngOnInit() {
    const { street, city, zip } = this.business?.address;
    this.businessAddress = `${street}, ${city} ${zip}`;
  }
}
