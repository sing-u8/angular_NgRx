import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { map, catchError, switchMap } from 'rxjs/operators'
import { of } from 'rxjs'

import { PopularTagsService } from '@shared/modules/popularTags/services/popularTags.service'
import {
  getPopularTagsAction,
  getPopularTagsSuccessAction,
  getPopularTagsFailure,
} from '@shared/modules/popularTags/store/actions/getPopularTags.action'
import { PopularTagType } from '@shared/types/popularTag.type'

@Injectable()
export class GetPopularTagsEffect {
  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) => {
            return getPopularTagsSuccessAction({ popularTags })
          }),

          catchError(() => {
            return of(getPopularTagsFailure())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) {}
}
