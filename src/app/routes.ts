import { Routes } from '@angular/router';
import { Error404Component } from './error/404.component';
import { FormsComponent } from './forms/forms.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { MyArticleComponent } from './my-articles/my-articles.component';
import { ProjectDetailsComponent } from './Projects/Project  Details/project-details.component';
import { ProjectsListComponent } from './Projects/projects-list.component';
import { ProjectRouteActivator } from './Projects/shared/project-route-activator.service';

export const appRoutes: Routes = [
  { path: 'myarticles', component: MyArticleComponent },
  { path: 'projects', component: ProjectsListComponent },
  {
    path: 'projects/:id',
    component: ProjectDetailsComponent,
    canActivate: [ProjectRouteActivator],
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'contactme', component: FormsComponent },
  { path: 'myinfo', component: MyInfoComponent },
];
