import { Component } from '@angular/core'
import { HeroServices } from '../../services/heroes.service'
import { Hero } from '../../interfaces/heroes.interface'

@Component({
  selector: 'app-list-heroes',
  standalone: true,
  imports: [],
  templateUrl: './list-heroes.component.html',
  styleUrl: './list-heroes.component.css',
})
export class ListHeroesComponent {
  private _heroes: Hero[] = []

  constructor(private heroServices: HeroServices) {}

  public get getHeroes(): Hero[] {
    return this._heroes
  }

  public set setHeroes(newHero: Hero) {
    this._heroes.push(newHero) // NOTE: Verificar que el crud funcione
  }

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    this.heroServices.getHeroes().subscribe({
      next: (response: Hero[]) => (this._heroes = response),
      error: error => console.error(error),
      complete: () => console.log('Hero request completed'),
    })
  }
}
