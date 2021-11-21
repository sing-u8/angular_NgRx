import { Component, Input } from '@angular/core'
import { ArticleInputInterface } from '@shared/types/articleInput.interface'
import { BackendErrorsInterface } from '@shared/types/backendErrors.interface'

@Component({
  selector: 'mc-article-form',
  templateUrl: './articleForm.component.html',
  styleUrls: ['./articleForm.component.scss'],
})
export class ArticleFormComponent {
  @Input('initialValues') initialValuesProps: ArticleInputInterface
  @Input('isSubmitting') isSubmittingProps: boolean
  @Input('errors') errorsProps: BackendErrorsInterface | null
}
