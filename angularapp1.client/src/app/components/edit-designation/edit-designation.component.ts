import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Designation } from '../../model/data';
import { DesignationService } from '../../services/designation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-designation',
  templateUrl: './edit-designation.component.html',
  styleUrl: './edit-designation.component.css'
})
export class EditDesignationComponent implements OnInit {
   id!: number;
   designation!: Designation;
   form!: FormGroup;


  constructor(private desigService: DesignationService, private router: Router, private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.LoadData();

    this.form = new FormGroup({
      id: new FormControl(this.designation.id),
      name: new FormControl(this.designation.name, [Validators.required]),
    })
  }
  LoadData() {
    this.desigService.GetDesignation(this.id).subscribe((data: Designation) => {
      this.designation = data;

      this.form = new FormGroup({
        id: new FormControl(this.designation.id),
        name: new FormControl(this.designation.name, [Validators.required]),
      })
      console.log(data);
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }
  get name() {
    return this.form.controls["name"];
  }

  UpdateDesignation() {
    this.desigService.UpdateDesignation(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/designation']);
      }
    });
  }


}
