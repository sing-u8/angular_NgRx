import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { FeedComponent } from 'src/app/shared/modules/feed/components/feed/feed.component'

import { FeedService } from '@shared/modules/feed/services/feed.service'
import { GetFeedEffect } from '@shared/modules/feed/store/effects/getFeed.effect'
import {
  feedFeatureKey,
  feedReducer,
} from '@shared/modules/feed/store/reducers'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature(feedFeatureKey, feedReducer),
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
