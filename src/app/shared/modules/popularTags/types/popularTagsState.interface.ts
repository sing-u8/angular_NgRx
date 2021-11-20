import { PopularTagType } from '@shared/types/popularTag.type'

export interface PopularTagsStateInterface {
  data: PopularTagType[] | null
  isLoading: boolean
  error: string | null
}
