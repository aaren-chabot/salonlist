import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  barbersTitle = 'Top Barbers';
  salonsTitle = 'Top Salons';
  barbers = [
    {
      name: 'Barber 1',
      address: '400 York Blvd, Toronto, ON M5V 3Z3',
      image: 'https://placeimg.com/450/300/arch',
      isFeatured: true,
      rating: 3.5,
      link: ''
    },
    {
      name: 'Hair Salon 2',
      address: '140 King St, Toronto, ON M5V 3Z3',
      image: 'https://placeimg.com/450/300/arch',
      isFeatured: false,
      rating: 4.5,
      link: ''
    },
    {
      name: 'Hair Salon 3',
      address: '900 Front York Blvd, Toronto, ON M5V 3Z3',
      image: 'https://placeimg.com/450/300/people',
      isFeatured: false,
      rating: 5.0,
      link: ''
    }
  ];
  salons = [
    {
      name: 'Evolve Hair Studio',
      address: '40 Fort York Blvd, Toronto, ON M5V 3Z3',
      image: 'https://placeimg.com/450/300/arch',
      isFeatured: true,
      rating: 3.5,
      link: ''
    },
    {
      name: 'Hair Salon 2',
      address: '140 Front York Blvd, Toronto, ON M5V 3Z3',
      image: 'https://placeimg.com/450/300/people',
      isFeatured: false,
      rating: 4.5,
      link: ''
    },
    {
      name: 'Hair Salon 3',
      address: '90 Fort York Blvd, Toronto, ON M5V 3Z3',
      image: 'https://placeimg.com/450/300/people',
      isFeatured: false,
      rating: 4.0,
      link: ''
    }
  ];

  constructor() {}

  ngOnInit() {}
}
