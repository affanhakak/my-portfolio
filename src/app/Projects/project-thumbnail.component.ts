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
        justify-content: space-between;
        align-items: center;
        height: auto;
        width: auto;
      }
      @media only screen and (max-width: 1024px) {
        display: block;
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
