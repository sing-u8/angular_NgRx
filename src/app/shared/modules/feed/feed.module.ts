import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { RouterModule } from '@angular/router'

import { FeedComponent } from '@shared/modules/feed/components/feed/feed.component'

import { FeedService } from '@shared/modules/feed/services/feed.service'
import { GetFeedEffect } from '@shared/modules/feed/store/effects/getFeed.effect'
import {
  feedFeatureKey,
  feedReducer,
} from '@shared/modules/feed/store/reducers'

import { ErrorMessageModule } from '@shared/modules/errorMessage/errorMessage.module'
import { LoadingModule } from '@shared/modules/loading/loading.module'
import { PaginationModule } from '@shared/modules/pagination/pagination.module'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature(feedFeatureKey, feedReducer),
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
