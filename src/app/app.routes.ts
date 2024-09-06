import { SearchBarComponent } from './components/search-bar/search-bar.component'
import { Routes } from '@angular/router'
import { NavigationComponent } from './components/navigation/navigation.component'
import { HeroFormComponent } from './components/hero-form/hero-form.component'
import { ListHeroesComponent } from './components/list-heroes/list-heroes.component'

export const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
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
