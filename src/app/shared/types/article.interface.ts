import { ProfileInterface } from '@shared/types/profile.interface'
import { PopularTagType } from './popularTag.type'

export interface ArticleInterface {
  title: string
  slug: string
  body: string
  createdAt: string
  updatedAt: string
  tagList: PopularTagType[]
  description: string
  author: ProfileInterface
  favorited: boolean
  favoritesCount: number
}
