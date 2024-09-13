import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { MatSidenavModule } from '@angular/material/sidenav'

import { NavbarComponent } from '../navbar/navbar.component'

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NavbarComponent, MatSidenavModule, RouterOutlet],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {}
