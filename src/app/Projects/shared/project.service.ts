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
    name: 'Calorie Tracker App',
    date: '10/9/2020',
    type: 'Angular',
    info: 'Calorie Tracker App is an app and website that tracks diet and keeps note of all the calories',
  },
  {
    id: 2,
    name: 'Simple Counter App',
    date: '10/9/2020',
    type: 'Angular',
    info: 'A simple counter to keep scores and increment and decrement them',
  },
  {
    id: 3,
    name: 'Calorie Tracker App (JS)',
    date: '25/9/2020',
    type: 'Native JS',
    info: 'Calorie Tracker App is an app and website that tracks diet and keeps note of all the calories',
  },
  {
    id: 4,
    name: 'Todo List App',
    date: '20/10/2020',
    type: 'Native JS',
    info: 'Todo List App is an app and website that tracks your daily activities',
  },
];
