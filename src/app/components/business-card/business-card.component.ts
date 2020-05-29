import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})
export class BusinessCardComponent implements OnInit {
  business = {
    name: 'Evolve Hair Studio',
    address: '40 Fort York Blvd, Toronto, ON M5V 3Z3',
    image: 'https://placeimg.com/450/300/arch',
    isFeatured: true,
    rating: 3.5,
    link: ''
  };

  constructor() {}

  ngOnInit() {}
}
