import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { TopBarModule } from '@shared/modules/topBar/topBar.module'
import { PersistanceService } from '@shared/services/persistance.service'
import { AuthInterceptor } from '@shared/services/authinterceptor.service'

import { AuthModule } from '@auth/auth.module'
import { environment } from '@environments/environment'
import { GlobalFeedModule } from '@globalFeed/globalFeed.module'
import { YourFeedModule } from './yourFeed/yourFeed.module'
import { TagFeedModule } from 'src/app/tagFeed/tagFeed.module'
import { ArticleModule } from './article/article.module'
import { CreateArticleModule } from './createArticle/createArticle.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({ router: routerReducer }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    TopBarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    CreateArticleModule, // the order is important!!   -- article/new (primary) and article/:slug  (secandary)
    ArticleModule,
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
