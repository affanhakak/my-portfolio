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
    name: 'Simple Calorie Tracker',
    date: '28/03/2019',
    tech_used: 'Vanilla Javascript',
    url: 'https://caltrackerah.netlify.app',
    info: 'A simple e-com app to track your daily calorie intake',
  },
  {
    id: 2,
    name: 'Task Manager',
    date: '17/03/2022',
    tech_used: 'Angular, Angular Material, Bulma',
    url: 'https://task-manager-ah.netlify.app',
    info: 'A task manager to track your day to day tracks',
  },
  {
    id: 3,
    name: 'Dashboard Demo',
    date: '10/9/2023',
    tech_used: 'Angular, Angular Material',
    url: 'https://demo-dash-ah.netlify.app',
    info: 'Dashboard demo for a media based organization',
  },
  {
    id: 4,
    name: 'E-com Demo',
    date: '25/9/2020',
    tech_used: 'Angular, Bootstrap',
    url: 'https://demo-ecom-ah.netlify.app',
    info: 'Basic ecom app with a cart',
  },
  {
    id: 5,
    name: 'Score Keeper',
    date: '20/10/2020',
    tech_used: 'Vanilla JS',
    url: 'https://scorekeeperah.netlify.app',
    info: 'App to track scores of two players or even two teams',
  },
  {
    id: 6,
    name: 'Simple Calci Vanilla-JS',
    date: '01/08/2019',
    tech_used: 'Vanilla JS',
    url: 'https://calciah.netlify.app',
    info: 'A simple calculator for performing mathematical operations',
  },
  {
    id: 7,
    name: 'Todo App',
    date: '01/07/2019',
    tech_used: 'Vanilla JS',
    url: 'https://todoah.netlify.app',
    info: 'A simpleapp to remember your tasks ',
  },
  {
    id: 8,
    name: 'TV-Series search app',
    date: '01/07/2019',
    tech_used: 'Vanilla JS',
    url: 'https://tvsearchappah.netlify.app',
    info: 'An app to search your favourite movies, this app hits an api',
  },
];
