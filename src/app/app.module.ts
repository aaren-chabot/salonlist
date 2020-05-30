import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BusinessCardComponent } from './components/business-card/business-card.component';
import { RecommendedBusinessesComponent } from './components/recommended-businesses/recommended-businesses.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeroCarouselComponent } from './components/hero-carousel/hero-carousel.component';
import { BusinessComponent } from './pages/business/business.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BusinessCardComponent,
    RecommendedBusinessesComponent,
    NotFoundComponent,
    HeroCarouselComponent,
    BusinessComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
