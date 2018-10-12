import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private BASEURL: string = 'http://api.openweathermap.org/data/2.5';
  private APP_ID: string = '19799946459f899349781cba2013fa77';

  constructor(private httpClient: HttpClient) {
  }

  getForecastForFiveDays(cityName: string): Observable<any> {
    return this.httpClient.get(`${this.BASEURL}/forecast?q=${cityName}&APPID=${this.APP_ID}`);
  }
}
