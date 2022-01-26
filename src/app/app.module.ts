import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectsListComponent } from './Projects/projects-list.component';
import { ProjectThumbnailComponent } from './Projects/project-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { ProjectDetailsComponent } from './Projects/Project  Details/project-details.component';
import { Error404Component } from './error/404.component';
import { FormsComponent } from './forms/forms.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { MyArticleComponent } from './my-articles/my-articles.component';

import { ProjectRouteActivator } from './Projects/shared/project-route-activator.service';
import { ProjectService } from './Projects/shared/project.service';
import { EnrollmentService } from './forms/enrollment.service';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    ProjectThumbnailComponent,
    NavBarComponent,
    ProjectDetailsComponent,
    Error404Component,
    FormsComponent,
    MyInfoComponent,
    MyArticleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ProjectService, EnrollmentService, ProjectRouteActivator],
  bootstrap: [AppComponent],
})
export class AppModule {}
