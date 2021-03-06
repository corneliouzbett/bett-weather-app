import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {

  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  /*
  * navigates back to home
  * default view */
  gobackHome(): void {
    this.route.navigate(['/']);
  }
}
