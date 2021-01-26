import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { ProjectEmployeeComponent } from './project-employee/project-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeEditComponent,
    EmployeesListComponent,
    ProjectEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
