import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { SprintServiceService } from 'src/app/sprint-service.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  sprints:any=[];
  constructor(private SprintService:SprintServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.getSprintsList();
  }

  getSprintsList() {
    this.sprints=[];
    this.SprintService.getSprints().subscribe((data:{})=>{
      console.log(data);
      this.sprints=data;
      console.log(this.sprints);
    });
  }


}
