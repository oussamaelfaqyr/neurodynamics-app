import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';   
import { MarcEvent } from './pages/marc-event/marc-event';
import { provideRouter } from '@angular/router';
import { ApplicationConfig } from '@angular/core';


export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: About},
  { path: 'marc', component: MarcEvent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default redirect
  { path: '**', redirectTo: 'home' }, // Wildcard route for 404



]

;
