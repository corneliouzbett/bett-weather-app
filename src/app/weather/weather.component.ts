import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../service/weather.service';
import {ForecastService} from '../service/forecast.service';
import {LocationService} from '../service/location.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  forecastData = [];
  forecast_sorted_data = [];
  cityName = '';
  country = '';
  temperature = '';
  pressure = '';
  humidity = '';
  latitude = '';
  longitude = '';
  description = '';
  icon = '';
  degree = '';
  speed = '';
  subscription: Subscription;

  constructor(private weatherService: WeatherService,
              private forecastService: ForecastService,
              private locationService: LocationService,
              private route: ActivatedRoute,
              private nav: Router) {
    this.subscription = new Subscription();
  }

  ngOnInit() {
    this.subscription.add(this.route.paramMap.subscribe((params) => {
      let city = params.get('cityname');
      console.log('cityname', city);
      this.getCurrentWeatherOfaCity(city);
      this.getForecastforTheFiveDays(city);
    }));
  }

  getCurrentWeatherOfaCity(cityName: string) {
    this.subscription.add(this.weatherService.getCurrentWeatherOfaCity(cityName)
      .subscribe((data) => {
        const results = data;
        console.log('Current weather : ', results);
        this.cityName = results['name'];
        this.country = results['sys'].country;
        this.latitude = results['coord'].lat;
        this.longitude = results['coord'].lon;
        this.humidity = results['main'].humidity;
        this.pressure = results['main'].pressure;
        this.temperature = results['main'].temp;
        this.icon = `http://openweathermap.org/img/w/${results['weather']['0'].icon}.png`;
        this.description = results['weather']['0'].description;
        this.degree = results['wind'].deg;
        this.speed = results['wind'].speed;
      }, error1 => {
        console.log('ERROR OCCURRED :', error1);
        this.nav.navigate(['/error']);
      }));
  }

  getForecastforTheFiveDays(cityName: string) {
    this.subscription.add(this.forecastService.getForecastForFiveDays(cityName)
      .subscribe((forecast) => {
        this.forecastData = [];
        forecast.list.forEach((data) => {
          let localData = {};
          localData['temp'] = data['main'].temp;
          localData['pressure'] = data['main'].pressure;
          localData['wind'] = data['wind'].deg;
          localData['humidity'] = data['main'].humidity;
          localData['icon'] = `http://openweathermap.org/img/w/${data['weather']['0'].icon}.png`;
          localData['description'] = data['weather']['0'].description;
          localData['date'] = data['dt_txt'];
          localData['speed'] = data['wind'].speed;
          this.forecastData.push(localData);
        });
        console.log('my array', this.forecastData);
          console.log('Weather Forecast: ', forecast);
        this.forecast_sorted_data = [];
        this.forecast_sorted_data.push(this.forecastData.slice(4, 5));
        this.forecast_sorted_data.push(this.forecastData.slice(12, 13));
        this.forecast_sorted_data.push(this.forecastData.slice(20, 21));
        this.forecast_sorted_data.push(this.forecastData.slice(28, 29));
        this.forecast_sorted_data.push(this.forecastData.slice(36, 37));
        console.log('Data sorted: ', this.forecast_sorted_data);
        }, error1 => {
          console.log('ERROR OCCURRED: ', error1);
        }
      ));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

