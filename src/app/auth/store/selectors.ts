import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AppStateInterface } from 'src/app/shared/types/appState.interface'
import { AuthStateInterface } from 'src/app/auth/types/authState.interface'

export const authFeatureKey = 'auth'

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>(authFeatureKey)

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
)
