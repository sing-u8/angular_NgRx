import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

import { environment } from '@environments/environment'
import { ArticleInterface } from '@shared/types/article.interface'
import { GetArticleResponseInterface } from '@shared/types/getArticleResponse.interface'

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`
    return this.http.get<GetArticleResponseInterface>(fullUrl).pipe(
      map((response: GetArticleResponseInterface) => {
        return response.article
      })
    )
  }
}
