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
      <div>Type: {{ project?.tech_used }}</div>
      <div>Info: {{ project?.info }}</div>
    </div>
  `,
  styles: [
    `
      .thumbnail {
        align-items: center;
        height: 90%;
        width: auto;
      }
      @media only screen and (max-width: 1024px) {
        .thumbnail {
          display: block;
          height: 90%;
          width: 100%;
          margin-bottom: 20px;
        }
      }
      @media only screen and (max-width: 600px) {
        .thumbnail {
          display: block;
          height: 90%;
          width: 100%;
          margin-bottom: 20px;
        }
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
