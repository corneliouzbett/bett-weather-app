import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeatherComponent} from './weather/weather.component';
import {Error404Component} from './error404/error404.component';
import {TrackComponent} from './track/track.component';

const routes: Routes = [
  {path: 'weather/:cityname', component: WeatherComponent},
  {path: '', redirectTo: 'weather/eldoret', pathMatch: 'full'},
  {path: 'error', component: Error404Component},
  {path: 'track', component: TrackComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
