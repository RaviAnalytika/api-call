import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './shared/employee';
import { Observable } from 'rxjs/internal/Observable';
import { retry, catchError } from 'rxjs/operators';
import { Project } from './shared/project';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  // Define API
  apiURL = 'http://192.168.1.5:8080';

  constructor(private http : HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // getData(){
  //   let url = "getAllEmployee/";
  //   return this.http.get(url);

  // }  
  
 // HttpClient API get() method => Fetch employees list
 getEmployees(): Observable<Employee> {
  return this.http.get<Employee>(this.apiURL + '/getAllEmployee/')
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}
  handleError(handleError: any): import("rxjs").OperatorFunction<Employee, any> {
    throw new Error('Method not implemented.');
  }
   // HttpClient API get() method => Fetch employee
   getEmployee(eid: number): Observable<Employee> {
    return this.http.get<Employee>("http://192.168.1.5:8080/getEmployeeById/" +eid);
   
  }  


// Project Detail
getAllProject(): Observable<Project> {
  return this.http.get<Project>(this.apiURL + '/getAllProject/')
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}


getProject(eid: number): Observable<Project> {
  return this.http.get<Project>(this.apiURL + '/getProjectById/' +eid);
 
}  


}
