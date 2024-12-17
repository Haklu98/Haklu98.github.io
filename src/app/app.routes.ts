import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { Ticorporate2024Component } from './shared/project-sites/ticorporate2024/ticorporate2024.component';
import { TicorporateGameOstComponent } from './shared/project-sites/ticorporate-game-ost/ticorporate-game-ost.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'ticorporate2024', component: Ticorporate2024Component },
  { path: 'ticorporate-game-ost', component: TicorporateGameOstComponent },

];
