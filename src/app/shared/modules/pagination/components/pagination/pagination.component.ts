import { Component, Input, OnInit } from '@angular/core'
import { UtilsService } from '@shared/services/utils.service'

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit {
  @Input('total') totalProps: number = 0
  @Input('limit') limitProps: number = 0
  @Input('currentPage') currentPageProps: number = 0
  @Input('url') urlProps: string = ''

  public pagesCount: number = 0
  public pages: number[] = []

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps)
    this.pages = this.utilsService.range(1, this.pagesCount)
  }
}
