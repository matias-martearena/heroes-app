import { Router } from '@angular/router'
import { Component, Input } from '@angular/core'
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
  @Input() searchFilter: string = ''

  constructor(private heroServices: HeroServices, private router: Router) {}

  public get getHeroes(): Hero[] {
    if (this.searchFilter) {
      return this._heroes.filter(hero =>
        hero.superhero.toLowerCase().includes(this.searchFilter.toLowerCase()),
      )
    }
    return this._heroes
  }

  public set setHeroes(newHero: Hero) {
    this._heroes.push(newHero)
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

  deleteHero(id: string): void {
    this._heroes = this._heroes.filter(hero => hero.id !== id)
    this.heroServices.deleteHero(id).subscribe()
  }

  editHero(id: string): void {
    this.router.navigate(['/home/heroes-form', id]);
  }
}
