import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.scss']
})
export class HeroCarouselComponent implements OnInit {
  config = {
    showNavigationArrows: false,
    showNavigationIndicators: false,
    interval: 40000000000
  };
  testData = 'testing';
  images = [944, 1011, 984].map(
    (n) => `https://picsum.photos/id/${n}/2000/500`
  );
  constructor() {}

  ngOnInit() {}
}
