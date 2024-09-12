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

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      surname: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', Validators.required],
    })
  }

  create() {}
}
