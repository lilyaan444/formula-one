import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private startY: number = 0;

  constructor(private router: Router) {}

  @HostListener('window:touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.startY = event.touches[0].clientY;
  }

  @HostListener('window:touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    const currentY = event.touches[0].clientY;
    if (this.startY - currentY > 100) {
      this.navigateToApp();
    }
  }

  private navigateToApp() {
    // Redirection vers la page driver
    this.router.navigate(['/tabs/driver']);
  }
}
