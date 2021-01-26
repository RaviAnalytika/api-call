import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-project-employee',
  templateUrl: './project-employee.component.html',
  styleUrls: ['./project-employee.component.css']
})
export class ProjectEmployeeComponent implements OnInit {

  reportdetailslist: any[] | undefined; 
  data: any[] | undefined;
  constructor( private restApi : UserServiceService,) { }

  ngOnInit() {
    this.loadProjects()
   
  }

  // Get employees list
  loadProjects() {
    return this.restApi.getAllProject().subscribe((data: any) => {     
      this.reportdetailslist = data;
    })
  }
 

}
