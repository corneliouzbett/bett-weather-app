import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private BASEURL = 'http://api.openweathermap.org/data/2.5';
  private APP_ID = '19799946459f899349781cba2013fa77';

  constructor(private httpClient: HttpClient) {
  }

  getCurrentWeatherOfaCity(cityName: String): Observable<any> {
    let build_url = `${this.BASEURL}/weather?q=${cityName}&APPID=${this.APP_ID}`;
    return this.httpClient.get(build_url);
  }
}
