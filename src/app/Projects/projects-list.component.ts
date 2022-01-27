import { Component, OnInit } from '@angular/core';
import { ProjectService } from './shared/project.service';

@Component({
  template: `
    <div>
      <h1>My Projects in Angular and Vanilla JS</h1>
      <hr />
      <div class="row">
        <div *ngFor="let project of projects" class="col-md-5">
          <project-thumbnail [project]="project"></project-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class ProjectsListComponent implements OnInit {
  projects?: any[];
  constructor(private projectService: ProjectService) {}
  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }
}
