import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SprintServiceService {
  private baseUrl: string= "https://localhost:44322/";

  constructor(private http:HttpClient) { 
    
  }


  getSprints(): Observable<any> {
    let url_ = this.baseUrl + "api/Sprints";
   // url_ = url_.replace(/[?&]$/, "");

    //let url_="https://localhost:44322/api/Sprints";
    let options_ = <RequestInit>{
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    };

    return this.http.get<any[]>(url_)
    .pipe(map(data=>data));
  }

  // getSprintList() {
  //   return this.http.get(this.baseUrl+'/api/Sprints');
  // }

  createSprint(data)
  {
    return this.http.post(this.baseUrl+'api/Sprints',data);
  }

}
