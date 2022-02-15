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
    name: 'E-Com App (Angular)',
    date: '28/03/2019',
    type: 'Angular',
    url: 'https://affan-s-ecomapp.netlify.app',
    info: 'A dummy E-com application responsive website using Angular',
  },
  {
    id: 2,
    name: 'Calorie Tracker App-1',
    date: '10/9/2020',
    type: 'Angular',
    url: 'https://affan-s-calorietracker2.netlify.app',
    info: 'Calorie Tracker App is an app and website that tracks diet and keeps note of all the calories',
  },
  {
    id: 3,
    name: 'Simple Counter App',
    date: '10/9/2020',
    type: 'Vanilla JS',
    url: 'https://affan-s-counter.netlify.app',
    info: 'A simple counter to keep scores and increment and decrement them',
  },
  {
    id: 4,
    name: 'Calorie Tracker App-2',
    date: '25/9/2020',
    type: 'Vanilla JS',
    url: 'https://affan-s-caltracker1.netlify.app',
    info: 'Calorie Tracker App is an app and website that tracks diet and keeps note of all the calories',
  },
  {
    id: 5,
    name: 'Todo List App Vanilla-JS',
    date: '20/10/2020',
    type: 'Vanilla JS',
    url: 'https://affan-s-todo.netlify.app',
    info: 'Todo List App is an app and website that tracks your daily activities',
  },
  {
    id: 6,
    name: 'Simple Calci Vanilla-JS',
    date: '01/08/2019',
    type: 'Vanilla JS',
    url: 'https://affan-s-calci.netlify.app',
    info: 'A simple calculator for performing mathematical operations',
  },
  {
    id: 7,
    name: 'Score Keeper Vanilla-JS',
    date: '01/07/2019',
    type: 'Vanilla JS',
    url: 'https://affan-s-scorekeeper.netlify.app',
    info: 'An app to keep track of scores of two players or even two teams',
  },
  {
    id: 8,
    name: 'TV-Series search app',
    date: '01/07/2019',
    type: 'Vanilla JS',
    url: 'https://affan-s-tvsearchapp.netlify.app',
    info: 'An app to search your favourite movies, this app hits an api',
  },
];
