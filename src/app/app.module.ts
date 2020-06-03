import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '@modules/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { HomePageComponent } from '@pages/home/home.component';
import { NotFoundPageComponent } from '@pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    NotFoundPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HttpClientModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
