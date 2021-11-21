import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { reducers } from '@article/store/reducers'
import { GetArticleEffect } from '@article/store/effects/getArticle.effect'
import { DeleteArticleEffect } from './store/effects/deleteArticle.effect'

import { ArticleComponent } from './components/article/article.component'
import { ArticleService as SharedArticleService } from '@shared/services/article.service'
import { ArticleService } from '@article/services/article.service'

import { LoadingModule } from '@shared/modules/loading/loading.module'
import { ErrorMessageModule } from '@shared/modules/errorMessage/errorMessage.module'
import { TagListModule } from '@shared/modules/tagList/tagList.module'

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    LoadingModule,
    ErrorMessageModule,
    TagListModule,
  ],
  declarations: [ArticleComponent],
  providers: [SharedArticleService, ArticleService],
})
export class ArticleModule {}
