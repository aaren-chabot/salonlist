import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { HomePageComponent } from '@pages/home/home.component';
import { BusinessCardComponent } from '@components/business-card/business-card.component';
import { RecommendedBusinessesComponent } from '@components/recommended-businesses/recommended-businesses.component';
import { NotFoundPageComponent } from '@pages/not-found/not-found.component';
import { HeroCarouselComponent } from '@components/hero-carousel/hero-carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconComponent } from '@components/icon/icon.component';
import { SearchComponent } from '@components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    BusinessCardComponent,
    RecommendedBusinessesComponent,
    NotFoundPageComponent,
    HeroCarouselComponent,
    IconComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
