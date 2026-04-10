import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  constructor(private router: Router) {}

  initialize(): void {
    // Fake GA initialization
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      const gtag = function(...args: any[]) {
        (window as any).dataLayer.push(args);
      };
      
      gtag('js', new Date());
      // No ID specified per requirements
      gtag('config', 'GA_FAKE_ID', {
        'send_page_view': false
      });

      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          gtag('event', 'page_view', {
            page_path: event.urlAfterRedirects
          });
          console.log(`[Analytics] Tracked page view: ${event.urlAfterRedirects}`);
        }
      });
    }
  }

  trackEvent(eventName: string, params: Record<string, any> = {}): void {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push(['event', eventName, params]);
      console.log(`[Analytics] Tracked event: ${eventName}`, params);
    }
  }
}
