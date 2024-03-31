import { Component, OnInit } from '@angular/core';
import { Designation, Employee, Experience } from '../../model/data';
import { DesignationService } from '../../services/designation.service';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css'
})
export class EmployeeEditComponent implements OnInit {

  designationList: Designation[] = [];
  model!: Employee;
  id!: number;

  constructor(private designationService: DesignationService, private empService: EmployeeService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.LoadDesignations();
    this.LoadData();
    

  }


  OnSubmit() {

    let test: string = '';




    //alert(JSON.stringify(this.model));


    this.empService.UpdateEmployee(this.model).subscribe({
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
    }, (error: string) => {
      console.log('Observable emitted an error: ' + error);
    });
  }
  LoadData() {
    this.empService.GetEmployee(this.id).subscribe((data: Employee) => {
      this.model = data;
      console.log(data);
    }, (error: string) => {
      console.log('Observable emitted an error: ' + error);
    });
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
