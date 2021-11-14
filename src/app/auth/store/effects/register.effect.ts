import { Injectable } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'

import { createEffect, Actions, ofType } from '@ngrx/effects'
import { map, catchError, switchMap } from 'rxjs/operators'

import { PersistanceService } from '@shared/services/persistance.service'

import {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from '@auth/store/actions/register.action'
import { AuthService } from '@auth/services/auth.service'
import { CurrentUserInterface } from '@shared/types/currentUser.interface'
import { of } from 'rxjs'

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return registerSuccessAction({ currentUser })
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            console.log('errorResponse: ', errorResponse)
            return of(
              registerFailureAction({ errors: errorResponse.error.errors })
            )
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}
}
