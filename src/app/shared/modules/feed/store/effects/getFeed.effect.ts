import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { map, catchError, switchMap } from 'rxjs/operators'
import { of } from 'rxjs'

import { FeedService } from '@shared/modules/feed/services/feed.service'
import {
  getFeedAction,
  getFeedSuccessAction,
  getFeedFailureAction,
} from '@shared/modules/feed/store/actions/getFeed.action'
import { GetFeedResponseInterface } from '@shared/modules/feed/types/getFeedResponse.interface'

@Injectable()
export class GetFeedEffect {
  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return getFeedSuccessAction({ feed })
          }),

          catchError(() => {
            return of(getFeedFailureAction())
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private feedService: FeedService) {}
}
