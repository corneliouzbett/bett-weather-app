import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../service/weather.service';
import {ForecastService} from '../service/forecast.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public currentweather: any;

  constructor(private weatherService: WeatherService,
              private forecastService: ForecastService) {
  }

  ngOnInit() {
    this.getCurrentWeatherOfaCity('Eldoret');
    this.getForecastforTheFiveDays('Eldoret');
  }

  getCurrentWeatherOfaCity(cityName: string) {
    this.weatherService.getCurrentWeatherOfaCity(cityName)
      .subscribe((data) => {
        console.log('Current weather : ', data);
        this.currentweather = data;
      });
  }

  getForecastforTheFiveDays(cityName: string) {
    this.forecastService.getForecastForFiveDays(cityName)
      .subscribe((forecast) => {
          console.log('Weather Forecast: ', forecast);
        }, error1 => {
          console.log('ERROR OCCURRED: ', error1);
        }
      );
  }
}

