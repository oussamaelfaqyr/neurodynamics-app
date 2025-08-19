import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.html',
  styleUrls: ['./hero-section.css']
})
export class HeroSectionComponent implements OnInit {
  isLoaded = false;
  
  stats = {
    members: 150,
    projects: 10,
    events: 3
  };

  ngOnInit() {
    // Trigger animations after component loads
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);

    // Animate stats counting up
    this.animateStats();
  }

  private animateStats() {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    
    const targets = { ...this.stats };
    const current = { members: 0, projects: 0, events: 0 };
    
    const increment = {
      members: targets.members / steps,
      projects: targets.projects / steps,
      events: targets.events / steps
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      
      current.members = Math.floor(increment.members * step);
      current.projects = Math.floor(increment.projects * step);
      current.events = Math.floor(increment.events * step);
      
      this.stats = { ...current };
      
      if (step >= steps) {
        this.stats = targets; // Ensure final values are exact
        clearInterval(timer);
      }
    }, stepDuration);
  }
}