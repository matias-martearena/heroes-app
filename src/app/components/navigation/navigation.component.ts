import { Component } from '@angular/core'
import { NavbarComponent } from '../navbar/navbar.component'
import { MatSidenavModule } from '@angular/material/sidenav'
import { RouterOutlet } from '@angular/router'
import { SidebarComponent } from '../sidebar/sidebar.component'

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NavbarComponent, MatSidenavModule, RouterOutlet, SidebarComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {}
