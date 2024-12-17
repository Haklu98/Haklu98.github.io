import { Component, Input, OnInit } from '@angular/core';
import { ProjectsService } from '../../service/projects.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { Project } from '../../shared/projects/projects';
import { ProjectData } from '../../shared/projects/project-data';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, MatCardModule, RouterLink, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

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
