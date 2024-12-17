import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../shared/projects/projects';
import { ProjectData } from '../shared/projects/project-data';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  getProject(): Observable<Project[]> {
    const projects = of(ProjectData);
    return projects;
  }

  constructor() { }
}
