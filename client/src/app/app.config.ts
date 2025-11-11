import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { provideAuth } from './components/auth/auth.provider';
import { provideNotifications } from './components/shared/notificacao/notificacao.provider';

const routes: Routes = [];

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),

    provideNotifications(),
    provideAuth(),
  ],
};
