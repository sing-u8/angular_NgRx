import { AuthStateInterface } from '@auth/types/authState.interface'
import { FeedStateInterface } from '@shared/modules/feed/types/feedState.interface'

export interface AppStateInterface {
  auth: AuthStateInterface
  feed: FeedStateInterface
}
