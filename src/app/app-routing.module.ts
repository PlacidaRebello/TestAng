import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WeatherComponent} from './weather/weather.component';
import{WeatherForecastComponent} from './Components/weather-forecast/weather-forecast.component';

const routes: Routes = [
  {path:'weather', component:  WeatherComponent},
  {path :'WeatherForecast',component:WeatherForecastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
