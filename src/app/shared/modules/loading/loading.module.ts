import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LoadingComponent } from '@shared/modules/loading/components/loading/loading.component'

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingComponent],
  exports: [LoadingComponent],
})
export class LoadingModule {}