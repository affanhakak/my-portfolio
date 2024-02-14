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
        display: block;
        height: 90%;
        width: 100%;
        margin-bottom: 20px;
        transition: transform 0.3s ease-in, box-shadow 0.3s ease-in;
      }

      .thumbnail:hover {
        color: black;
        background-color: #444;
        transform: scale(1.1); /* Enlarge on hover */
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* Add shadow to create depth */
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
