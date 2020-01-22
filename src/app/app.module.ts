import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherForecastComponent } from './Components/weather-forecast/weather-forecast.component';
import { WeatherComponent } from './weather/weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemonavComponent } from './demonav/demonav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { DefaultPageComponent } from './default-page/default-page.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import{HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { SprintServiceService } from './sprint-service.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastComponent,
    WeatherComponent,
    DemonavComponent,
    DashboardComponent,
    DefaultPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    DragDropModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SprintServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
