import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import { Project } from '../services/project';
import { ProjectsService } from '../services/projects.service';
import { EditDialogComponent } from './edit-dialog.component';
import { AddDialogComponent } from './add-dialog.component';

@Component({
  selector: 'axial-projects',
  templateUrl: '../templates/project.component.html',
  styleUrls: ['../styles/project.component.css']
})


export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(
    private projService: ProjectsService,
    public dialog: MdDialog
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
   openDialog() {
    let dialogRef = this.dialog.open(EditDialogComponent);
  }

   addDialog() {
    let dialogRef = this.dialog.open(AddDialogComponent);
  }
}