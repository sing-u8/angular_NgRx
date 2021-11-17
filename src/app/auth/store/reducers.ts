import { createReducer, on } from '@ngrx/store'
import { createImmerReducer } from 'ngrx-immer/store'

import { AuthStateInterface } from '@auth/types/authState.interface'
import {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from '@auth/store/actions/register.action'
import {
  loginAction,
  loginSuccessAction,
  loginFailureAction,
} from '@auth/store/actions/login.action'
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from './actions/getCurrentUser.action'

export const authFeatureKey = 'auth'

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
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
  }),
  //------------------------------------------------------------------------//
  on(loginAction, (state): AuthStateInterface => {
    state.isSubmitting = true
    state.validationErrors = null
    return state
  }),
  on(loginSuccessAction, (state, action): AuthStateInterface => {
    state.isSubmitting = false
    state.isLoggedIn = true
    state.currentUser = action.currentUser
    return state
  }),
  on(loginFailureAction, (state, action): AuthStateInterface => {
    state.isSubmitting = false
    state.validationErrors = action.errors
    return state
  }),
  //------------------------------------------------------------------------//
  on(getCurrentUserAction, (state): AuthStateInterface => {
    state.isLoading = true
    return state
  }),
  on(getCurrentUserSuccessAction, (state, action): AuthStateInterface => {
    state.isLoading = false
    state.isLoggedIn = true
    state.currentUser = action.currentUser
    return state
  }),
  on(getCurrentUserFailureAction, (state): AuthStateInterface => {
    state.isLoading = false
    state.isLoggedIn = false
    state.currentUser = null
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
