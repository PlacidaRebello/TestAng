import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WeatherComponent} from './weather/weather.component';
import{WeatherForecastComponent} from './Components/weather-forecast/weather-forecast.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultPageComponent } from './default-page/default-page.component';

const routes: Routes = [
  {path:'weather', component:  WeatherComponent},
  {path :'WeatherForecast',component:WeatherForecastComponent},  
  {path :'Dashboard',component:DashboardComponent},
  {path :'',component:DefaultPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
