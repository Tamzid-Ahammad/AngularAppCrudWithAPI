import { Component, OnInit } from '@angular/core';
import { Designation } from '../../model/data';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DesignationService } from '../../services/designation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-designation',
  templateUrl: './add-designation.component.html',
  styleUrl: './add-designation.component.css'
})
export class AddDesignationComponent implements OnInit {
  public designation!: Designation;
  public form!: FormGroup;


  constructor(private designatioService: DesignationService, private router: Router) {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', [Validators.required]),
    })
  }

  get name() {
    return this.form.controls["name"];
  }

  SaveDesignation() {
    this.designatioService.SaveDesignation(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/designation']);
      }
    });
  }
}
