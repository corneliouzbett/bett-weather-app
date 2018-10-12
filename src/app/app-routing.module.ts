import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeatherComponent} from './weather/weather.component';
import {Error404Component} from './error404/error404.component';

const routes: Routes = [
  {path: 'weather/:cityname', component: WeatherComponent},
  {path: '', redirectTo: 'weather/eldoret', pathMatch: 'full'},
  {path: 'error', component: Error404Component}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
