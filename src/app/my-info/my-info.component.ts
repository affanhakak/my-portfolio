import { Component } from '@angular/core';

@Component({
  templateUrl: './my-info.component.html',
  styles: [
    `
      .card {
        height: 35rem;
        margin: auto;
        background-color: grey;
      }
      .card-title {
        margin-top: 10px;
        color: black;
        font-size: 20px;
        font-style: italic;
      }
      .card-text {
        color: black;
        font-size: 20px;
        font-style: italic;
        padding: 5px;
      }
    `,
  ],
})
export class MyInfoComponent {}
