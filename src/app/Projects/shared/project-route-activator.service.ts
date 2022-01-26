import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { ProjectService } from './project.service';

@Injectable()
export class ProjectRouteActivator implements CanActivate {
  constructor(private projectService: ProjectService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot) {
    const projectExists = !!this.projectService.getProject(+route.params['id']);
    if (!projectExists) this.router.navigate(['/404']);
    return projectExists;
  }
}
