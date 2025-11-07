import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import {
    provideServerRendering, RenderMode, ServerRoute, withAppShell, withRoutes
} from '@angular/ssr';

import { appConfig } from './app.config';
import { ShellComponent } from './components/shared/shell/shell.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'medicos/**',
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(withRoutes(serverRoutes), withAppShell(ShellComponent))],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
