import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WeatherComponent} from './weather/weather.component';
import {WeatherService} from './service/weather.service';
import {HttpClientModule} from '@angular/common/http';
import {LocationService} from './service/location.service';
import {ForecastService} from './service/forecast.service';
import {SearchComponent} from './search/search.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {Error404Component} from './error404/error404.component';
import {TrackComponent} from './track/track.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SearchComponent,
    FooterComponent,
    HeaderComponent,
    Error404Component,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [
    WeatherComponent,
    SearchComponent,
    FooterComponent,
    HeaderComponent,
    Error404Component,
    TrackComponent
  ],
  providers: [WeatherService, LocationService, ForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
