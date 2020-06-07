import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})
export class BusinessCardComponent implements OnInit {
  @Input() business: any = {};
  businessAddress: string;

  constructor() {}

  ngOnInit() {
    const { street, city, zip } = this.business?.address;
    this.businessAddress = `${street}, ${city} ${zip}`;
    console.log('city', this.business);
  }
}
