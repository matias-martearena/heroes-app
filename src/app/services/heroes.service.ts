import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { environment } from '../environments/environment.development'
import { Hero } from '../interfaces/heroes.interface'

@Injectable({
  providedIn: 'root',
})
export class HeroServices {
  private apiUrl: string = environment.apiUrl

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.apiUrl}/heroes`)
  }

  deleteHero(id: string): Observable<Hero> {
    return this.http.delete<Hero>(`${this.apiUrl}/heroes/${id}`)
  }

  createHero(newHero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.apiUrl}/heroes`, newHero)
  }

  editHero(currentHero: Hero): Observable<Hero> {
    return this.http.patch<Hero>(
      `${this.apiUrl}/heroes/${currentHero.id}`,
      currentHero,
    )
  }
}
