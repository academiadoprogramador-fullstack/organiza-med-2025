import { Routes } from '@angular/router';

import { ShellComponent } from './components/shared/shell/shell.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [],
  },
];
