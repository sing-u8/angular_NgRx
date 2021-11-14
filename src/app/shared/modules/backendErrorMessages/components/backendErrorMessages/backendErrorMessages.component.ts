import { Component, Input, OnInit } from '@angular/core'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['./backendErrorMessages.components.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface | null =
    null

  public errorMessages: string[] = []

  constructor() {}

  ngOnInit(): void {
    this.initErrorMessage()
  }

  initErrorMessage() {
    if (this.backendErrorsProps != null) {
      const backendErr = this.backendErrorsProps as BackendErrorsInterface
      this.errorMessages = Object.keys(backendErr).map((name: string) => {
        const messages = backendErr[name].join(' ')
        return `${name} ${messages}`
      })
    }
  }
}
