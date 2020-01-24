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
  sprint= new Sprint();
  sprintForm:FormGroup;
  sprints:any=[];
  data:any=[];
  // sprint={
  //   sprintName:'',
  //   sprintPoints:''
  // }

  constructor(private SprintService:SprintServiceService,private route:ActivatedRoute,private router:Router,private fb:FormBuilder) 
  {

   }

  ngOnInit() {
    this.sprintForm=this.fb.group({
      sprintName:['',[Validators.required,Validators.minLength(5)]],
      sprintPoints:['',Validators.required],
      startDate:'2020/04/02',
      EndDate:'2020/05/03',
      createdBy:'placi'
    });

    this.getSprintsList();
  }

  onSubmit(){
   this.CreateSprint(this.sprintForm.value);
  }

  CreateSprint(formvalues){
      console.log(formvalues,"sprint");
      this.SprintService.createSprint(formvalues)
      .subscribe(resp=>{
        console.log(resp,"resp");
        this.data=resp
      },
      error=>{
        console.log(error,"error");
      })
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

 

  getErrorMessage() {
    // return this.sprintName.hasError('required') ? 'You must enter a value' :
    //     this.email.hasError('email') ? 'Not a valid email' :
    //         '';
  }
}
