import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ShellComponent } from './components/shared/shell/shell.component';

@Component({
  selector: 'app-root',
  imports: [ShellComponent, RouterOutlet],
  template: ` <!-- App shell -->
    <app-shell>
      <router-outlet></router-outlet>
    </app-shell>`,
})
export class App {}
