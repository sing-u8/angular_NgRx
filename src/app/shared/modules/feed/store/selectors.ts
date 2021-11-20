import { createFeatureSelector, createSelector } from '@ngrx/store'
import { FeedStateInterface } from '@shared/modules/feed/types/feedState.interface'
import { feedFeatureKey } from '@shared/modules/feed/store/reducers'

export const feedFeatureSelector =
  createFeatureSelector<FeedStateInterface>(feedFeatureKey)

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.isLoading
)

export const errorSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.error
)

export const feedSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.data
)
