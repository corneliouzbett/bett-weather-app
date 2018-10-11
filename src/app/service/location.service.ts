import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private BASEURL = 'https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json';

  constructor(private httpClient: HttpClient) { }

  getLocations(): Observable<any>{
    return this.httpClient.get(this.BASEURL);
  }

}
