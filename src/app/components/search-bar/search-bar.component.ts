import { Component, inject } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'
import { Subject } from 'rxjs'
import { Router, RouterModule } from '@angular/router'

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  private searchSubject = new Subject<string>()
  private router = inject(Router)

  constructor() {
    this.searchSubject
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe(searchTerm => {
        this.doSearch(searchTerm)
      })
  }

  ngOnInit(): void {}

  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement
    const searchTerm = inputElement.value
    this.searchSubject.next(searchTerm)
  }

  doSearch(searchTerm: string) {
    console.log('Current search:', searchTerm)
    // To-Do: implement search logic and call the service here
  }

  logout() {
    // To-Do: implement logout logic and call the service here
    this.router.navigate(['/'])
  }
}
