import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '../services/projects.service';
import { Proj as Project } from '../services/interface'
import {MdDialog, MdDialogRef} from '@angular/material';
@Component({
  selector: 'formsDialog',
  templateUrl: '../templates/dialog.component.html'
})

export class AddDialogComponent {
 

  project: FormGroup
  constructor(
  public dialogRef: MdDialogRef<AddDialogComponent>,
   private fb: FormBuilder,
   private projService: ProjectsService,
   public dialog: MdDialog,) {}
  ngOnInit() {
    this.project = this.fb.group({
      headline: [''],
      checkMin: [''],
      checkMax: [''],
      trMin: [''],
      trMax: [''],
      ebiMin: [''],
      ebiMax: [''],
    })
  }

  onSubmit({value, valid} : {value: Project, valid: boolean}): void {
    let proj = {
      headline: value.headline ,
      target_check_size_min: Number(value.checkMin) ,
      target_check_size_max: Number(value.checkMax) ,
      target_revenue_min: Number(value.trMin) ,
      target_revenue_max: Number(value.trMax) ,
      target_ebitda_min: Number(value.ebiMin) ,
      target_ebitda_max: Number(value.ebiMax) ,
    }

    this.projService.addProject(proj)
    this.dialog.closeAll()
  }
}