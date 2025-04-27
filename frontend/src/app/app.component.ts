import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'food-web';
  originalToken: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.originalToken = localStorage.getItem('token');
  }

  @HostListener('window:storage', ['$event'])
  onStorageChange(event: StorageEvent) {
    if (event.key === 'token') {
      const currentToken = event.newValue;
      if (!currentToken) {
        this.router.navigate(['/login']);
      } else if (currentToken !== this.originalToken) {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }
    }
  }

  isAuthPage(): boolean {
    const currentUrl = this.router.url;
    return currentUrl.includes('/login') || currentUrl.includes('/signup');
  }
}
