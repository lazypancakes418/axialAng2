import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { Project } from '../services/project';
import { ProjectsService } from '../services/projects.service';
// import { EditFormService }  from '../services/edit-form.service';
import { EditDialogComponent } from './edit-dialog.component';
import { AddDialogComponent } from './add-dialog.component';

@Component({
  selector: 'axial-projects',
  templateUrl: '../templates/project.component.html',
  styleUrls: ['../styles/project.component.css'],
})


export class ProjectsComponent implements OnInit {

  projects: Project[];
  constructor(
    private projService: ProjectsService,
    // private formService: EditFormService,
    public dialog: MdDialog,
  ) { }

  getProjects(): void {
    this.projService.getProjects().then(projs => this.projects = projs);
  }

  ngOnInit(): void {
    this.getProjects();
  }

  deleteProject(index: number): void {
    this.projService.deleteProject(index).then(projs => this.projects = projs)
  }
  openDialog(proj: any, index: number) {
    let { headline,
      target_check_size_min,
      target_check_size_max,
      target_revenue_min,
      target_revenue_max,
      target_ebitda_min,
      target_ebitda_max, } = proj;
    let dialogRef = this.dialog.open(EditDialogComponent);
    dialogRef.componentInstance.headline = headline;
    dialogRef.componentInstance.checkMin = target_check_size_min;
    dialogRef.componentInstance.checkMax = target_check_size_max;
    dialogRef.componentInstance.trMin = target_revenue_min;
    dialogRef.componentInstance.trMax = target_revenue_max;
    dialogRef.componentInstance.ebiMin = target_ebitda_min;
    dialogRef.componentInstance.ebiMax = target_ebitda_max;
    dialogRef.componentInstance.index = index;

    dialogRef.afterClosed().subscribe(() => this.getProjects())
  }

  addDialog() {
    let dialogRef = this.dialog.open(AddDialogComponent);
    dialogRef.afterClosed().subscribe(() => this.getProjects())
  }
}