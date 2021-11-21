import { createFeatureSelector, createSelector } from '@ngrx/store'
import { CreateArticleStateInterface } from '@createArticle/types/createArticleState.interface'
import { createArticleFeatureKey } from '@createArticle/store/reducers'

export const createArticleFeatureSelector =
  createFeatureSelector<CreateArticleStateInterface>(createArticleFeatureKey)

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) =>
    createArticleState.isSubmitting
)

export const validationErrorsSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) =>
    createArticleState.validationErrors
)
