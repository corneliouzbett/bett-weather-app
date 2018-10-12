import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private BASEURL = 'http://api.openweathermap.org/data/2.5';
  private APP_ID = '19799946459f899349781cba2013fa77';

  constructor(private http: HttpClient) {
  }

  getCurrentWeatherOfaCity(cityName: String): Observable<any> {
    return this.http.get(`${this.BASEURL}/weather?q=${cityName}&APPID=${this.APP_ID}`);
  }
}
