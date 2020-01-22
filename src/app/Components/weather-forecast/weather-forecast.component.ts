import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { SprintServiceService } from 'src/app/sprint-service.service';
import {FormBuilder,FormArray,Validators, FormGroup,FormControl} from '@angular/forms';
import {Sprint} from 'src/app/Models/sprint';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  sprints:any=[];
  data:any=[];
  // sprint={
  //   sprintName:'',
  //   sprintPoints:''
  // }

  sprintForm=this.fb.group({
    sprintName:['',[Validators.required,Validators.maxLength(10)]],
    sprintPoints:['',Validators.required]
  });

  constructor(private SprintService:SprintServiceService,private route:ActivatedRoute,private router:Router,private fb:FormBuilder) 
  {

   }

  ngOnInit() {
    this.getSprintsList();
  }

  getSprintsList() {
    this.sprints=[];
    this.SprintService.getSprints().subscribe((data:{})=>{      
      this.sprints=data;
      console.log(this.sprints);
    },
    error=>{
      console.log(error,"Check services");
    }
    );
  }

  onSubmit(){
    this.CreateSprint(this.sprintForm.value);
  }

  CreateSprint(formvalues){
      let sprint={
        sprintName:formvalues.sprintName,
        sprintPoints:formvalues.sprintPoints
      }
      console.log(sprint,"sprint");
      
      console.log(sprint);
      this.SprintService.createSprint(sprint)
      .subscribe(resp=>{
        console.log(resp,"resp");
        this.data=resp
      },
      error=>{
        console.log(error,"error");
      })
  }

  getErrorMessage() {
    // return this.sprintName.hasError('required') ? 'You must enter a value' :
    //     this.email.hasError('email') ? 'Not a valid email' :
    //         '';
  }
}
