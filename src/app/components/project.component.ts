import {Component, OnInit } from '@angular/core';

import { Project } from '../services/project';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'axial-projects',
  templateUrl: '../templates/project.component.html'
})


export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(
    private projService: ProjectsService
  ) { }

  getProjects() : void {
    console.log('getting')
    this.projService.getProjects().then(projs => this.projects = projs);
  }

  ngOnInit() : void {
    this.getProjects()
  }
}