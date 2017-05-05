import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { EditFormService } from '../services/edit-form.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '../services/projects.service';

import { Subscription } from 'rxjs/Subscription';
import { Proj as Project } from '../services/interface'

@Component({
  selector: 'formDialog',
  templateUrl: '../templates/dialog.component.html',
  styleUrls: ['../styles/dialog.component.css']
})

export class EditDialogComponent implements OnInit {
  headline: string;
  checkMin: number;
  checkMax: number;
  trMin: number;
  trMax: number;
  ebiMin: number;
  ebiMax: number;
  index: number;

  project: FormGroup
  constructor(public dialogRef: MdDialogRef<EditDialogComponent>,
   private fb: FormBuilder,
   private projService: ProjectsService,
   public dialog: MdDialog,) { }

  ngOnInit() {
    this.project = this.fb.group({
      headline: [this.headline],
      checkMin: [this.checkMin],
      checkMax: [this.checkMax],
      trMin: [this.trMin],
      trMax: [this.trMax],
      ebiMin: [this.ebiMin],
      ebiMax: [this.ebiMax],
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

    this.projService.editProject(this.index, proj)
    this.dialog.closeAll()
  }
}