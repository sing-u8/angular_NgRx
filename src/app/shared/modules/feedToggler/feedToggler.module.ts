import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { FeedTogglerComponent } from '@shared/modules/feedToggler/components/feedToggler/feedToggler.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [FeedTogglerComponent],
  exports: [FeedTogglerComponent],
})
export class FeedTogglerModule {}
