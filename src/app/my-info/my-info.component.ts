import { Component } from '@angular/core';

@Component({
  templateUrl: './my-info.component.html',
  styles: [
    `
      .container {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      @media only screen and (max-width: 1024px) {
        .container {
          display: flex;
          margin-left: 0;
          margin-top: 30px;
          margin-bottom: 30px;
        }
      }
      @media only screen and (max-width: 600px) {
        .container {
          display: block;
        }
      }

      .card {
        display: flex;
        height: 100%;
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
