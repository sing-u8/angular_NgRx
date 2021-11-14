import { createReducer, on } from '@ngrx/store'
import { createImmerReducer } from 'ngrx-immer/store'

import { AuthStateInterface } from '@auth/types/authState.interface'
import {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from '@auth/store/actions/register.action'

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null,
}

export const authReducer = createImmerReducer(
  initialState,
  on(registerAction, (state): AuthStateInterface => {
    state.isSubmitting = true
    state.validationErrors = null
    return state
  }),
  on(registerSuccessAction, (state, action): AuthStateInterface => {
    state.isSubmitting = false
    state.isLoggedIn = true
    state.currentUser = action.currentUser
    return state
  }),
  on(registerFailureAction, (state, action): AuthStateInterface => {
    state.isSubmitting = false
    state.validationErrors = action.errors
    return state
  })
)

// is same functionality
// export const authReducer = createReducer(
//   initialState,
//   on(
//     registerAction,
//     (state): AuthStateInterface => ({
//       ...state,
//       isSubmitting: true,
//     })
//   )
// )
