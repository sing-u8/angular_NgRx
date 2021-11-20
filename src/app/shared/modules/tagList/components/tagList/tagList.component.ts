import { Component, Input } from '@angular/core'

import { PopularTagType } from '@shared/types/popularTag.type'

@Component({
  selector: 'mc-tag-list',
  templateUrl: './tagList.component.html',
})
export class TagListComponent {
  @Input('tags') tagsProps: PopularTagType[]
}
