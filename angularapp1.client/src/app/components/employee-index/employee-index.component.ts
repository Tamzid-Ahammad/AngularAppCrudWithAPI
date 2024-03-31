import { Component } from '@angular/core';
import { Employee, Experience } from '../../model/data';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-index',
  templateUrl: './employee-index.component.html',
  styleUrl: './employee-index.component.css'
})
export class EmployeeIndexComponent {
  public employees: Employee[] = [];
  constructor(private service: EmployeeService) {

  }
  ngOnInit(): void {
    this.LoadData();

  }

  LoadData() {
    this.service.GetEmployees().subscribe((response: Employee[]) => {
      this.employees = response;
      console.log(response);
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }




  DeleteEmployee(emp: Employee) {
    let confirmDelete: boolean = confirm(`Delete ${emp.name}?`);
    if (confirmDelete) {
      this.service.DeleteEmployee(emp.id).subscribe(() => {
        this.LoadData();
      }, (error) => {
        console.log('Observable emitted an error: ' + error);
      });
    }
  }
}
