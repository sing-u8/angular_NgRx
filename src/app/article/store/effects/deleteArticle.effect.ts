import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { map, catchError, switchMap, tap } from 'rxjs/operators'
import { of } from 'rxjs'

import { ArticleService } from '@article/services/article.service'
import {
  deleteArticleAction,
  deleteArticleSuccessAction,
  deleteArticleFailureAction,
} from '@article/store/actions/deleteArticle.action'

@Injectable()
export class DeleteArticleEffect {
  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleAction),
      switchMap(({ slug }) => {
        return this.articleService.deleteArticle(slug).pipe(
          map(() => {
            return deleteArticleSuccessAction()
          }),

          catchError(() => {
            return of(deleteArticleFailureAction())
          })
        )
      })
    )
  )

  redirectAfterDelete$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteArticleSuccessAction),
        tap(() => {
          this.router.navigate(['/'])
        })
      ),
    { dispatch: false }
  )

  constructor(
    private actions$: Actions,
    private articleService: ArticleService,
    private router: Router
  ) {}
}
