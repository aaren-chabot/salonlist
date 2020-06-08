import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.scss']
})
export class HeroCarouselComponent implements OnInit {
  @Input() search = true;
  @Input() imgHeight = 500;
  config = {
    showNavigationArrows: false,
    showNavigationIndicators: false,
    interval: 4000
  };
  images: string[];
  constructor() {}

  ngOnInit() {
    this.images = [944, 1011, 984].map(
      (n) => `https://picsum.photos/id/${n}/2000/${this.imgHeight}`
    );
  }
}
