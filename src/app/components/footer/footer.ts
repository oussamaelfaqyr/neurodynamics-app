import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/neurodynamics',
      icon: 'facebook',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/neurodynamics',
      icon: 'twitter',
      hoverColor: 'hover:bg-blue-400'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/neurodynamics',
      icon: 'instagram',
      hoverColor: 'hover:bg-pink-600'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/neurodynamics',
      icon: 'linkedin',
      hoverColor: 'hover:bg-blue-700'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/neurodynamics',
      icon: 'github',
      hoverColor: 'hover:bg-gray-700'
    }
  ];

  quickLinks = [
    { name: 'Home', route: '/home' },
    { name: 'About Us', route: '/about' },
    { name: 'MARC Event', route: '/marc-event' },
    { name: 'Projects', route: '/projects' },
    { name: 'Contact', route: '/contact' }
  ];

  contactInfo = {
    address: 'University Campus\nCasablanca, Morocco',
    email: 'contact@neurodynamics.ma',
    phone: '+212 (0) 123 456 789'
  };

  onNewsletterSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get('email') as string;
    
    if (email) {
      // Handle newsletter subscription
      console.log('Newsletter subscription for:', email);
      // You can implement actual newsletter subscription logic here
      alert('Thank you for subscribing to our newsletter!');
      form.reset();
    }
  }
}