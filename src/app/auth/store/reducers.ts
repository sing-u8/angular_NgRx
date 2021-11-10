import { createReducer, on, Action } from '@ngrx/store'

import { AuthStateInterface } from '@auth/types/authState.interface'
import { registerAction } from '@auth/store/actions'

const initialState: AuthStateInterface = {
  isSubmitting: false,
}

export const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  )
)

// export function reducers(state: AuthStateInterface, action: Action) {
//   return authReducer(state, action)
// }
