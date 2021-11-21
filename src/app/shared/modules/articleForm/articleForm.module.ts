import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { ArticleFormComponent } from './components/articleForm/articleForm.component'
import { BackendErrorMessagesModule } from '@shared/modules/backendErrorMessages/backendErrorMessages.module'
@NgModule({
  imports: [CommonModule, ReactiveFormsModule, BackendErrorMessagesModule],
  declarations: [ArticleFormComponent],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}
