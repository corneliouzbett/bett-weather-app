import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeatherComponent} from './weather/weather.component';
import {DefaultcityComponent} from './defaultcity/defaultcity.component';
import {Error404Component} from './error404/error404.component';

const routes: Routes = [
  { path: 'default', component: DefaultcityComponent },
  { path: '', redirectTo: '/default', pathMatch: 'full' },
  { path: 'weather/:cityname', component: WeatherComponent },
  { path: 'error', component: Error404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
