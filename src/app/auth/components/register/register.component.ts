import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'

import { registerAction } from '@auth/store/actions/register.action'
import { isSubmittingSelector } from '@auth/store/selectors'
import { RegisterRequestInterface } from '@auth/types/registerRequest.interface'

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public form: FormGroup
  public isSubmitting$: Observable<boolean>

  constructor(private fb: FormBuilder, private store: Store) {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('submit', this.form.value, this.form.valid)
    const request: RegisterRequestInterface = {
      user: this.form.value,
    }
    this.store.dispatch(registerAction({ request }))
  }
}
