import { Component, Input, OnInit, OnDestroy } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'

import { Store, select } from '@ngrx/store'
import { Observable, Subscription } from 'rxjs'

import { getFeedAction } from '@shared/modules/feed/store/actions/getFeed.action'
import { GetFeedResponseInterface } from '@shared/modules/feed/types/getFeedResponse.interface'
import {
  feedSelector,
  errorSelector,
  isLoadingSelector,
} from '@shared/modules/feed/store/selectors'

import { stringify, parseUrl } from 'query-string'

import { environment } from '@environments/environment'

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps: string = ''

  feed$: Observable<GetFeedResponseInterface | null>
  error$: Observable<string | null>
  isLoading$: Observable<boolean>

  limit = environment.limit
  baseUrl: string
  queryParamsSubscription: Subscription
  currentPage: number = 1

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.feed$ = this.store.pipe(select(feedSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))

    this.baseUrl = this.router.url.split('?')[0] // get base url
  }

  ngOnInit(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params['page'] || '1')
        this.fetchFeed()
      }
    )
  }
  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }

  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit
    const parsedUrl = parseUrl(this.apiUrlProps)
    const stringifiedParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    })
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
    this.store.dispatch(getFeedAction({ url: apiUrlWithParams }))
  }
}
