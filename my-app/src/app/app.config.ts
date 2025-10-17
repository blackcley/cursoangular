import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BASE_API_URL } from './core/base_url';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: BASE_API_URL,
      useValue: 'http://localhost:3000'
    },
    provideBrowserGlobalErrorListeners(),
    //provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withFetch()
    ),
  ]
};