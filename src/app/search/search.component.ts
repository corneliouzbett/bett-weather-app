import {Component, OnInit} from '@angular/core';
import {LocationService} from '../service/location.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private locationService: LocationService,
              private route: Router) {
  }

  ngOnInit() {

  }

  /*
  * params => value from the search box
  * navigate to the next component /weather
  * passes value to the url*/
  getSearchTerm(value): void {
    this.route.navigate(['/weather', value]);
  }
}
