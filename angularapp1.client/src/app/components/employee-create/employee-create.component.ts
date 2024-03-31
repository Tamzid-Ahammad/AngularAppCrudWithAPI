import { Component, OnInit } from '@angular/core';
import { DesignationService } from '../../services/designation.service';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { Designation, Employee, Experience } from '../../model/data';
import { FormsModule } from '@angular/forms';
import { CommonModule, formatDate } from '@angular/common';


@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrl: './employee-create.component.css'
})
export class EmployeeCreateComponent implements OnInit {

  public designationList: Designation[] = [];
  public model!: Employee;


  constructor(private designationService: DesignationService, private empService: EmployeeService, private router: Router) {

  }
  ngOnInit(): void {
    this.LoadDesignations();


    this.model = new Employee();

  }


  OnSubmit() {

    let test: string = '';
   



    //alert(JSON.stringify(this.model));


    this.empService.SaveEmployee(this.model).subscribe({
      next: () => {
        this.router.navigate(['/index']);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  LoadDesignations() {
    this.designationService.GetDesignations().subscribe((data: Designation[]) => {
      this.designationList = data;
      console.log(data);
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }
  dateChanged(eventDate: string): Date {
    let date: string = formatDate(new Date(eventDate), "yyyy-MM-ddThh:mm", "en");

    this.model.joinDate = new Date(eventDate);

    return !!eventDate ? new Date(eventDate) : new Date();
  }
  AddExp() {

    this.model.experiences.push(new Experience());
  }

  DeleteExp(index: number) {
    //let exp = this.model.experiences.at(index);

    const remItem = this.model.experiences.splice(index, 1);
    console.log(`Removed Items: ${remItem[0].company}`);
  }

  onFileChange(event: any) {

    if (event.target.files.length > 0) {
      let currentFile = event.target.files.item(0);
      

      const formData: FormData = new FormData();
      formData.append('file', currentFile, currentFile.name);

      this.empService.Upload(formData).subscribe((data: string) => {
        this.model.imagePath = data;
        console.log(data);
      }, (error) => {
        console.log('Observable emitted an error: ' + error);
      });

      
    }
  }
}
