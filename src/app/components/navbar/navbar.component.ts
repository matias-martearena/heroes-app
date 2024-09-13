import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  sidebarItems = [
    { label: 'Home', icon: 'home', url: '/home' },
    { label: 'Listado', icon: 'label', url: '/home/list-heroes' },
    { label: 'Añadir', icon: 'add', url: '/home/heroes-form' },
    { label: 'Buscar', icon: 'search', url: '/home/search-heroes' },
  ]
}
