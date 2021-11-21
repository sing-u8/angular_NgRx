import { createReducer, on, Action } from '@ngrx/store'
import { createImmerReducer } from 'ngrx-immer/store'
import { routerNavigationAction } from '@ngrx/router-store'

import { ArticleStateInterface } from '@article/types/articleState.interface'
import {
  getArticleAction,
  getArticleSuccessAction,
  getArticleFailureAction,
} from '@article/store/actions/getArticle.action'

export const articleFeatureKey = 'article'

const initialState: ArticleStateInterface = {
  data: null,
  isLoading: false,
  error: null,
}

export const articleReducer = createImmerReducer(
  initialState,
  on(getArticleAction, (state): ArticleStateInterface => {
    state.isLoading = true
    return state
  }),
  on(getArticleSuccessAction, (state, action): ArticleStateInterface => {
    state.isLoading = false
    state.data = action.article
    return state
  }),
  on(getArticleFailureAction, (state): ArticleStateInterface => {
    state.isLoading = false
    return state
  }),
  on(routerNavigationAction, (): ArticleStateInterface => initialState)
)

export function reducers(state: ArticleStateInterface, action: Action) {
  return articleReducer(state, action)
}
