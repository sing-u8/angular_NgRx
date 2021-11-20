import { PopularTagsStateInterface } from '../types/popularTagsState.interface'
import { createImmerReducer } from 'ngrx-immer/store'
import { on, Action } from '@ngrx/store'
import {
  getPopularTagsAction,
  getPopularTagsSuccessAction,
  getPopularTagsFailure,
} from './actions/getPopularTags.action'

export const popularTagsFeatureKey = 'popularTags'

const initialState: PopularTagsStateInterface = {
  data: null,
  isLoading: false,
  error: null,
}

export const popularTagsReducer = createImmerReducer(
  initialState,
  on(getPopularTagsAction, (state): PopularTagsStateInterface => {
    state.isLoading = true
    return state
  }),
  on(
    getPopularTagsSuccessAction,
    (state, action): PopularTagsStateInterface => {
      state.isLoading = false
      state.data = action.popularTags
      return state
    }
  ),
  on(getPopularTagsFailure, (state): PopularTagsStateInterface => {
    state.isLoading = false
    return state
  })
)

export function reducers(state: PopularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action)
}
