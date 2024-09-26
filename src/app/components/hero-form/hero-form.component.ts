import { Component, inject } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { HeroServices } from '../../services/heroes.service'
import { Hero } from '../../interfaces/heroes.interface'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-hero-form',
  standalone: true,
  imports: [
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.css',
})
export class HeroFormComponent {
  form: FormGroup
  heroId: string = ''
  private activatedRoute = inject(ActivatedRoute)
  isEditing: boolean = false
  private currentEditingHeroId: string = ''

  constructor(
    private fb: FormBuilder,
    private heroService: HeroServices,
    private router: Router,
  ) {
    this.form = this.fb.group({
      superhero: ['', Validators.required],
      publisher: ['', Validators.required],
      alter_ego: ['', Validators.required],
      first_appearance: ['', Validators.required],
      characters: ['', Validators.required],
    })
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.heroId = params.get('id') || ''
      console.log(this.heroId)

      if (this.heroId) {
        this.isEditing = true
        this.heroService.getHeroes().subscribe((heroes: Hero[]) => {
          const hero = heroes.find(hero => hero.id === this.heroId)
          if (hero) {
            this.currentEditingHeroId = hero.id
            this.form.patchValue(hero)
          }
        })
      }
    })
  }

  handleFormSending() {
    if (this.isEditing) {
      this.edit()
    } else {
      this.create()
    }
    this.router.navigate(['/home/list-heroes'])
  }

  edit() {
    if (this.form.valid) {
      const hero = this.form.value as Hero
      hero.id = this.currentEditingHeroId
      this.heroService.editHero(hero).subscribe(res => {
        console.log(res)
      })
    }
  }

  create() {
    if (this.form.valid) {
      console.log(this.form.value)

      this.heroService.createHero(this.form.value as Hero).subscribe(res => {
        console.log(res)
      })
    }
  }
}
