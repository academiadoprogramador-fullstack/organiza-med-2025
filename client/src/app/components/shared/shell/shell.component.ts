import { Observable, PartialObserver } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { AuthService } from '../../auth/auth.service';
import { NotificacaoService } from '../notificacao/notificacao.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    AsyncPipe,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
  ],
})
export class ShellComponent {
  private readonly breakpointObserver = inject(BreakpointObserver);

  protected readonly router = inject(Router);
  protected readonly authService = inject(AuthService);
  protected readonly notificacaoService = inject(NotificacaoService);

  protected readonly accessToken$ = this.authService.accessToken$;

  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Handset])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  public itensNavbar = [
    { titulo: 'Início', icone: 'home', link: '/inicio' },
    { titulo: 'Médicos', icone: 'masks', link: '/categorias' },
    { titulo: 'Pacientes', icone: 'personal_injury', link: '/notas' },
    { titulo: 'Atividades Médicas', icone: 'medical_services', link: '/notas' },
  ];

  public logout() {
    const sairObserver: PartialObserver<null> = {
      error: (err) => this.notificacaoService.erro(err.message),
      complete: () => this.router.navigate(['/auth/login']),
    };

    this.authService.sair().subscribe(sairObserver);
  }
}
