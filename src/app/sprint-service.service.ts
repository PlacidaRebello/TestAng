import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Sprint } from './Models/sprint';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SprintServiceService {
  private baseUrl: string= "https://localhost:44322/";

  constructor(private http:HttpClient) {     
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getSprints(): Observable<any> {
    let url_ = this.baseUrl + "api/Sprints";
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

  createSprint(sprint):Observable<any>
  {
    return this.http.post(this.baseUrl+'api/Sprints',JSON.stringify(sprint),this.httpOptions)
    .pipe(map(resp=>sprint));
  }

}
