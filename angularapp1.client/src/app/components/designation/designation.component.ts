import { Component, OnInit } from '@angular/core';
import { DesignationService } from '../../services/designation.service';
import { Designation } from '../../model/data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  public designations: Designation[] = [];
  constructor(private designService: DesignationService) {

  }
  ngOnInit(): void {
    this.LoadData();

  }

  LoadData() {
    this.designService.GetDesignations().subscribe((data: Designation[]) => {
      this.designations = data;
      console.log(data);
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }




  DeleteDesignation(designation: Designation) {
    let confirmDelete: boolean = confirm(`Delete ${designation.name}?`);
    if (confirmDelete) {
      this.designService.DeleteDesignation(designation.id).subscribe(() => {
        this.LoadData();
      }, (error) => {
        console.log('Observable emitted an error: ' + error);
      });
    }
  }


}
