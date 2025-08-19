import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Header } from '../header/header'; 
import { FooterComponent } from '../footer/footer';
@Component({
  imports: [Header, FooterComponent],
  selector: 'app-cells-section',
  templateUrl: './cells-section.html',
  styleUrls: ['./cells-section.css']
})
export class CellsSection implements OnInit {
  @ViewChild('cellsSection', { static: true }) cellsSection!: ElementRef;
  isVisible = false;

  technicalCells = [
    {
      name: 'AI Cell',
      description: 'Focused on machine learning, deep learning, natural language processing, and computer vision. Developing intelligent systems that can learn and adapt.',
      icon: 'brain',
      color: 'blue',
      tags: ['Machine Learning', 'Deep Learning', 'NLP'],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Robotics Cell',
      description: 'Designing and building autonomous robots, from hardware integration to control systems. Creating machines that interact with the physical world.',
      icon: 'robot',
      color: 'purple',
      tags: ['Hardware', 'Automation', 'Control Systems'],
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Data Cell',
      description: 'Specializing in data science, big data analytics, and data visualization. Transforming raw data into actionable insights and intelligence.',
      icon: 'data',
      color: 'cyan',
      tags: ['Data Science', 'Analytics', 'Visualization'],
      gradient: 'from-cyan-500 to-cyan-600'
    }
  ];

  nonTechnicalCells = [
    {
      name: 'Design',
      description: 'Creating visual identities, user interfaces, and marketing materials that communicate our technological vision.',
      icon: 'design',
      color: 'pink',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Sponsoring',
      description: 'Building partnerships with industry leaders and securing funding for our innovative projects and events.',
      icon: 'sponsor',
      color: 'green',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Event',
      description: 'Organizing workshops, conferences, and competitions that bring together the AI and robotics community.',
      icon: 'event',
      color: 'orange',
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      name: 'Project',
      description: 'Coordinating collaborative projects and ensuring successful delivery of innovative solutions.',
      icon: 'project',
      color: 'indigo',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Use a timeout to ensure the view is initialized
    setTimeout(() => {
      const element = document.querySelector('app-cells-section');
      if (element) {
        observer.observe(element);
      }
    }, 100);
  }
}