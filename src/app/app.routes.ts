import { SearchBarComponent } from './components/search-bar/search-bar.component'
import { Routes } from '@angular/router'
import { NavigationComponent } from './components/navigation/navigation.component'
import { HeroFormComponent } from './components/hero-form/hero-form.component'
import { ListHeroesComponent } from './components/list-heroes/list-heroes.component'
import { LoginComponent } from './components/login/login.component'
import { HomePageComponent } from './components/home-page/home-page.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'heroes-form',
        component: HeroFormComponent,
      },
      {
        path: 'list-heroes',
        component: ListHeroesComponent,
      },
      {
        path: 'search-heroes',
        component: SearchBarComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
]
