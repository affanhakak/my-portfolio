import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {
  getProjects() {
    return PROJECTS;
  }
  getProject(id: number) {
    return PROJECTS.find((project) => project.id === id);
  }
}

const PROJECTS = [
  {
    id: 1,
    name: 'Calorie Tracker App-1',
    date: '10/9/2020',
    type: 'Angular',
    url: 'https://calorie-tracker-ah.netlify.app',
    info: 'Calorie Tracker App is an app and website that tracks diet and keeps note of all the calories',
  },
  {
    id: 2,
    name: 'Simple Counter App',
    date: '10/9/2020',
    type: 'Vanilla JS',
    url: 'https://counter-ah.netlify.app',
    info: 'A simple counter to keep scores and increment and decrement them',
  },
  {
    id: 3,
    name: 'Calorie Tracker App-2',
    date: '25/9/2020',
    type: 'Vanilla JS',
    url: 'https://cal-tracker-js-ah.netlify.app',
    info: 'Calorie Tracker App is an app and website that tracks diet and keeps note of all the calories',
  },
  {
    id: 4,
    name: 'Todo List App Vanilla-JS',
    date: '20/10/2020',
    type: 'Vanilla JS',
    url: 'https://todo-app-ah.netlify.app',
    info: 'Todo List App is an app and website that tracks your daily activities',
  },
  {
    id: 5,
    name: 'Simple Calculator Vanilla-JS',
    date: '01/08/2019',
    type: 'Vanilla JS',
    url: 'https://calculator-ah.netlify.app',
    info: 'A simple calculator for performing mathematical operations',
  },
  {
    id: 6,
    name: 'Candy Musuem (Bootstrap)',
    date: '28/03/2019',
    type: 'Bootstrap/CSS',
    url: 'https://musuem-of-candy-ah.netlify.app',
    info: 'A simple dummy responsive website using bootstrap and css',
  },
];
