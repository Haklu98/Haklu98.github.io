import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CodeComponent } from './code/code.component';
import { MusicComponent } from './music/music.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatTabsModule, CodeComponent, MusicComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
