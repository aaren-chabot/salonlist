import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BusinessCardComponent } from '@components/business-card/business-card.component';
import { HeroCarouselComponent } from '@components/hero-carousel/hero-carousel.component';
import { IconComponent } from '@components/icon/icon.component';
import { RecommendedBusinessesComponent } from '@components/recommended-businesses/recommended-businesses.component';
import { SearchComponent } from '@components/search/search.component';

@NgModule({
  declarations: [
    BusinessCardComponent,
    HeroCarouselComponent,
    IconComponent,
    RecommendedBusinessesComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
    NgbModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
    NgbModule,
    BusinessCardComponent,
    HeroCarouselComponent,
    IconComponent,
    RecommendedBusinessesComponent,
    SearchComponent
  ]
})
export class SharedModule {}
