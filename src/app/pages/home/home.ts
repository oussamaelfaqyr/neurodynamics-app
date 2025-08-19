import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import { HeroSectionComponent } from '../../components/hero-section/hero-section';
import { OnInit } from '@angular/core';
import { CellsSection } from "../../components/cells-section/cells-section";
import { CommonModule } from '@angular/common'; 
import { RouterModule} from '@angular/router';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  imports: [ HeroSectionComponent, FooterComponent, CellsSection, CommonModule, FormsModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  features = [
    {
      title: 'Innovation Hub',
      description: 'Access cutting-edge resources, state-of-the-art labs, and collaborative spaces designed for breakthrough innovations in AI and robotics.',
      icon: 'innovation',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-100'
    },
    {
      title: 'Strong Community',
      description: 'Join a vibrant network of like-minded innovators, researchers, and technology enthusiasts from across Morocco and beyond.',
      icon: 'community',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-100'
    },
    {
      title: 'Continuous Learning',
      description: 'Participate in workshops, seminars, and hands-on training sessions led by industry experts and academic leaders.',
      icon: 'learning',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-100'
    },
    {
      title: 'Real Projects',
      description: 'Work on real-world projects that solve actual problems and make a meaningful impact on society and industry.',
      icon: 'projects',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
      borderColor: 'border-orange-100'
    },
    {
      title: 'Professional Network',
      description: 'Build valuable connections with industry professionals, startups, and potential employers in the tech ecosystem.',
      icon: 'networking',
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-50 to-purple-50',
      borderColor: 'border-indigo-100'
    },
    {
      title: 'Exciting Events',
      description: 'Participate in hackathons, competitions, conferences, and exclusive events that showcase the latest in AI and robotics.',
      icon: 'events',
      gradient: 'from-teal-500 to-cyan-500',
      bgGradient: 'from-teal-50 to-cyan-50',
      borderColor: 'border-teal-100'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Smooth scroll to top when component loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Method to handle join community action
  onJoinCommunity() {
    // You can implement join community logic here
    console.log('Join Community clicked');
    // For example, open a modal, redirect to registration, etc.
  }

  // Method to scroll to a specific section
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}