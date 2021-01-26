import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from '../employees-list/employees-list.component';
import { ProjectEmployeeComponent } from '../project-employee/project-employee.component';
import { EmployeeEditComponent } from '../employee-edit/employee-edit.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'project-employee', component: ProjectEmployeeComponent },
  { path: 'employees-list', component: EmployeesListComponent },
  { path: 'employee-edit/:id', component: EmployeeEditComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }