import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BusinessCardComponent } from '@components/business-card/business-card.component';
import { HeroCarouselComponent } from '@components/hero-carousel/hero-carousel.component';
import { IconComponent } from '@components/icon/icon.component';
import { RecommendedBusinessesComponent } from '@components/recommended-businesses/recommended-businesses.component';
import { SearchComponent } from '@components/search/search.component';
import { SearchResultComponent } from '@components/search-result/search-result.component';
import { SearchFilterComponent } from '@components/search-filter/search-filter.component';

@NgModule({
  declarations: [
    BusinessCardComponent,
    HeroCarouselComponent,
    IconComponent,
    RecommendedBusinessesComponent,
    SearchComponent,
    SearchResultComponent,
    SearchFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
    NgbModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
    NgbModule,
    BusinessCardComponent,
    HeroCarouselComponent,
    IconComponent,
    RecommendedBusinessesComponent,
    SearchComponent,
    SearchResultComponent,
    SearchFilterComponent
  ]
})
export class SharedModule {}
