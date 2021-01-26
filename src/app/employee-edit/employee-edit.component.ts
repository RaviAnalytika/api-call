import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  projectData: any = {};
  employeeData : any = {};
  data: any[] | undefined;
  constructor(
    private user : UserServiceService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit(): void {
   
    this.user.getProject(this.id).subscribe(projectData => {
      this.user.getEmployee(this.id).subscribe(employeeData => {
        this.projectData = projectData;
        this.employeeData = employeeData;
      });
    });
  }

  getEmployById(){
    return this.user.getEmployee(this.id).subscribe((data: {}) => {
       console.warn(data);
       this.employeeData = data;
     })
   }
}
