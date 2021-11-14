import { createAction, props } from '@ngrx/store'

import { ActionTypes } from '@auth/store/actionTypes'
import { RegisterRequestInterface } from '@auth/types/registerRequest.interface'
import { CurrentUserInterface } from '@shared/types/currentUser.interface'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
)

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
)

export const registerFailureAction = createAction(ActionTypes.REGISTER_FAILURE)
