import { createAction, props } from '@ngrx/store'

import { ActionTypes } from '@shared/modules/popularTags/store/actionTypes'
import { PopularTagType } from '@shared/types/popularTag.type'

export const getPopularTagsAction = createAction(ActionTypes.GET_POPULAR_TAGS)

export const getPopularTagsSuccessAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{ popularTags: PopularTagType[] }>()
)

export const getPopularTagsFailure = createAction(
  ActionTypes.GET_POPULAR_TAGS_FAILURE
)
