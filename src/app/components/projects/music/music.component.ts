import { Component } from '@angular/core';
import { Project } from '../../../shared/projects/projects';
import { ProjectData } from '../../../shared/projects/project-data';
import { ProjectsService } from '../../../service/projects.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    NgFor,
    NgIf,
    RouterLink],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss'
})
export class MusicComponent {
  projects: Project[] = ProjectData;

  constructor(private projectsService: ProjectsService) { }

  getProjects(): void {
    this.projectsService.getProject().subscribe(projects => this.projects = projects);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getProjects();
  }
}
