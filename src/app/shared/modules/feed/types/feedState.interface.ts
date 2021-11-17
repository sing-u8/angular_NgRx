import { GetFeedResponseInterface } from '@shared/modules/feed/types/getFeedResponse.interface'

export interface FeedStateInterface {
  isLoading: boolean
  error: string | null
  data: GetFeedResponseInterface | null
}
