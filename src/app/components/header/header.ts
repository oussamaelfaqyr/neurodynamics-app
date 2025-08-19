import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { signal } from '@angular/core';
@Component({
  imports: [RouterModule],
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  isMobileMenuOpen = false;

  constructor(private router: Router) {}

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  // Alternative navigation method using router programmatically
  navigateTo(route: string) {
    this.router.navigate([route]);
    this.closeMobileMenu();
  }
}