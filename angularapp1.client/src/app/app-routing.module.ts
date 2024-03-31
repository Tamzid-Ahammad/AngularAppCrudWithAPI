import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignationComponent } from './components/designation/designation.component';
import { AddDesignationComponent } from './components/add-designation/add-designation.component';
import { EditDesignationComponent } from './components/edit-designation/edit-designation.component';
import { EmployeeIndexComponent } from './components/employee-index/employee-index.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';

const routes: Routes = [
  { path: "designation", redirectTo: "/designation/index", pathMatch:"full" },
  { path: "designation/index", component: DesignationComponent },
  { path: "designation/add", component: AddDesignationComponent },
  { path: "designation/edit/:id", component:EditDesignationComponent },
  { path: "index", component: EmployeeIndexComponent },
  { path: "employee/create", component: EmployeeCreateComponent },
  { path: "employee/edit/:id", component: EmployeeEditComponent },
  { path: "", redirectTo: "/index", pathMatch: "full" },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
