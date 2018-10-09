import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.getCurrentWeatherOfaCity('Eldoret');
  }

  getCurrentWeatherOfaCity(cityName: string) {
    this.weatherService.getCurrentWeatherOfaCity(cityName)
      .subscribe((data) => {
        console.log('Current weather : ', data);
      });
  }

}
