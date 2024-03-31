export interface Designation {
  id: number;
  name: string;

}

export class Employee {
  id: number = 0;
  name!: string;
  designationId!: number;
  joinDate: Date = new Date();
  salary: number = 0.00;
  isActive: boolean = true;
  imagePath!: string;
  imageFile!: File;
  experiences: Experience[] = [];
  designation!: Designation;
}

export class Experience {
  id: number = 0;
  company: string = '';
  position: string = '';
  duration: string = '';
  //employeeId: string;



  
}
