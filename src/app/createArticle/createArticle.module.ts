import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CreateArticleComponent } from '@createArticle/components/createArticle/createArticle.component'
import { RouterModule } from '@angular/router'
import { ArticleFormModule } from '@shared/modules/articleForm/articleForm.module'
import { CreateArticleService } from '@createArticle/services/createArticle.service'
import { EffectsModule } from '@ngrx/effects'
import { CreateArticleEffect } from './store/effects/createArticle.effect'
import { StoreModule } from '@ngrx/store'
import { reducers } from '@createArticle/store/reducers'
import { createArticleFeatureKey } from '@createArticle/store/reducers'

const routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature(createArticleFeatureKey, reducers),
  ],
  declarations: [CreateArticleComponent],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
