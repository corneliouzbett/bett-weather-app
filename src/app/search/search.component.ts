import { Component, OnInit } from '@angular/core';
import {LocationService} from '../service/location.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private locationService: LocationService,
              private route: Router) { }

  ngOnInit() {

  }
  getSearchTerm(value): void{
    this.route.navigate(['/weather', value]);
    console.log(value);
  }
}
