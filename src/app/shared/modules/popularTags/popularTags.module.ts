import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { RouterModule } from '@angular/router'

import {
  popularTagsReducer,
  popularTagsFeatureKey,
} from '@shared/modules/popularTags/store/reducers'
import { GetPopularTagsEffect } from '@shared/modules/popularTags/store/effects/getPopularTags.effect'
import { PopularTagsComponent } from '@shared/modules/popularTags/components/popularTags/popularTags.component'
import { LoadingModule } from '@shared/modules/loading/loading.module'
import { ErrorMessageModule } from '@shared/modules/errorMessage/errorMessage.module'
import { PopularTagsService } from '@shared/modules/popularTags/services/popularTags.service'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(popularTagsFeatureKey, popularTagsReducer),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    RouterModule,
    LoadingModule,
    ErrorMessageModule,
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
