import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BusinessCardComponent } from './components/business-card/business-card.component';
import { RecommendedBusinessesComponent } from './components/recommended-businesses/recommended-businesses.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeroCarouselComponent } from './components/hero-carousel/hero-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BusinessCardComponent,
    RecommendedBusinessesComponent,
    NotFoundComponent,
    HeroCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
