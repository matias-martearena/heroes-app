import { MatButtonModule } from '@angular/material/button'
import { Component } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatFormFieldModule } from '@angular/material/form-field'
import { CommonModule } from '@angular/common'
import { MatInputModule } from '@angular/material/input'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
  ],
})
export class LoginComponent {
  form: FormGroup
  loading: boolean = false

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  ngOnInit() {}

  login() {
    const usuario = this.form.value.user
    const password = this.form.value.password

    if (usuario === 'juan' && password === '123456') {
      this.fakeLoading()
    } else {
      this.onError()
      this.form.reset()
    }
  }

  onError() {
    this._snackBar.open('Usuario o contraseña inválidos', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    })
  }

  fakeLoading() {
    this.loading = true
    setTimeout(() => {
      this.router.navigate(['home'])
      this.loading = false
    }, 1500)
  }
}
