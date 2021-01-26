import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  reportdetailslist: any[] | undefined; 
  data: any[] | undefined;
  constructor( private restApi : UserServiceService,) { }

  ngOnInit() {
    this.loadEmployees()
   
  }

  // Get employees list
  loadEmployees() {
    return this.restApi.getEmployees().subscribe((data: any) => {
     
      console.warn(data);
      this.reportdetailslist = data;
    })
  }
 

}
