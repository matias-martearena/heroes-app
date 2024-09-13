import { Component } from '@angular/core'
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

  constructor(private fb: FormBuilder, private heroService: HeroServices) {
    this.form = this.fb.group({
      superhero: ['', Validators.required],
      publisher: ['', Validators.required],
      alter_ego: ['', Validators.required],
      first_appearance: ['', Validators.required],
      characters: ['', Validators.required],
    })
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
