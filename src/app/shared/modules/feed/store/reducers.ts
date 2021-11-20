import { createReducer, on, Action } from '@ngrx/store'
import { routerNavigationAction } from '@ngrx/router-store'
import { createImmerReducer } from 'ngrx-immer/store'
import { FeedStateInterface } from '@shared/modules/feed/types/feedState.interface'
import {
  getFeedAction,
  getFeedSuccessAction,
  getFeedFailureAction,
} from '@shared/modules/feed/store/actions/getFeed.action'

export const feedFeatureKey = 'feed'

const initialState: FeedStateInterface = {
  data: null,
  isLoading: false,
  error: null,
}

export const feedReducer = createImmerReducer(
  initialState,
  on(getFeedAction, (state): FeedStateInterface => {
    state.isLoading = true
    return state
  }),
  on(getFeedSuccessAction, (state, action): FeedStateInterface => {
    state.isLoading = false
    state.data = action.feed
    return state
  }),
  on(getFeedFailureAction, (state): FeedStateInterface => {
    state.isLoading = false
    return state
  }),
  on(routerNavigationAction, (state): FeedStateInterface => {
    return initialState
  })
)

// same to top reducer

// export function reducers(state: FeedStateInterface, action: Action) {
//   return feedReducer(state, action)
// }
