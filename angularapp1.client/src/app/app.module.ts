import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DesignationComponent } from './components/designation/designation.component';
import { AddDesignationComponent } from './components/add-designation/add-designation.component';
import { EditDesignationComponent } from './components/edit-designation/edit-designation.component';
import { CommonModule } from '@angular/common';
import { EmployeeIndexComponent } from './components/employee-index/employee-index.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignationComponent,
    AddDesignationComponent,
    EditDesignationComponent,
    EmployeeIndexComponent,
    EmployeeEditComponent,
    EmployeeDetailsComponent,
    EmployeeCreateComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    CommonModule, ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
