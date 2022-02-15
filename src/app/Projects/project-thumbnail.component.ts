import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-thumbnail',
  template: `
    <div
      [routerLink]="['/projects', project.id]"
      class="well hoverwell thumbnail"
    >
      <h2>{{ project?.name }}</h2>
      <hr />

      <div>Date: {{ project?.date }}</div>
      <div>Type: {{ project?.type }}</div>
      <div>Info: {{ project?.info }}</div>
    </div>
  `,
  styles: [
    `
      .thumbnail {
        diaplay: flex;
        justify-content: space-around;
        align-items: center;
        height: 220px;
        width: 450px;
      }
      .thumbnail:hover {
        color: black;
        background-color: #adb5bd;
        transition: 0.3s ease-in;
      }
    `,
  ],
})
export class ProjectThumbnailComponent {
  @Input()
  project?: any;
}
