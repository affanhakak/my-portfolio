import { Component } from '@angular/core';

@Component({
  templateUrl: './my-info.component.html',
  styles: [
    `
      .container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        align-items: center;
      }

      .card {
        height: 30rem;
        margin-top: 50px;
        background-color: #335c67;
      }

      .card:hover {
        background-color: #161a1d;
        transition: 0.5s ease-in;
      }
      .card-title {
        text-align: center;
        font-family: poppins;
        font-weight: strong;
        font-size: 20px;
        color: white;
        margin-botton: 20px;
      }

      .card-text {
        text-align: center;
        font-family: poppins;
        font-size: 14px;
        color: white;
      }
    `,
  ],
})
export class MyInfoComponent {}
