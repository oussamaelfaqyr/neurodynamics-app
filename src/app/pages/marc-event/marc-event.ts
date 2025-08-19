// src/app/marc-hackathon/marc-hackathon.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf

@Component({
  selector: 'app-marc-hackathon',
  standalone: true, // Mark component as standalone
  imports: [CommonModule], // Import CommonModule here
  templateUrl: './marc-event.html',
  styleUrls: ['./marc-event.css'] // You can add component-specific styles here if needed
})
export class MarcEvent implements OnInit {
  selectedVersion: string = '2025'; // Default to 2025
  currentVideoIndex: number = 0;
  totalVideos: number = 3; // Assuming 3 placeholder videos

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if any
  }

  selectVersion(version: string): void {
    this.selectedVersion = version;
    this.currentVideoIndex = 0; // Reset carousel when changing versions
  }

  // Carousel navigation methods
  nextVideo(): void {
    this.currentVideoIndex = (this.currentVideoIndex + 1) % this.totalVideos;
  }

  prevVideo(): void {
    this.currentVideoIndex = (this.currentVideoIndex - 1 + this.totalVideos) % this.totalVideos;
  }
}