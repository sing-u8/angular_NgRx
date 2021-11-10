import { createReducer, on } from '@ngrx/store'
import { createImmerReducer } from 'ngrx-immer/store'

import { AuthStateInterface } from '@auth/types/authState.interface'
import { registerAction } from '@auth/store/actions'

const initialState: AuthStateInterface = {
  isSubmitting: false,
}

export const authReducer = createImmerReducer(
  initialState,
  on(registerAction, (state): AuthStateInterface => {
    state.isSubmitting = true
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
