import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'

import { CurrentUserInterface } from '@shared/types/currentUser.interface'
import {
  isLoggedInSelector,
  isAnonymousSelector,
  currentUserSelector,
} from '@auth/store/selectors'

@Component({
  selector: 'mc-topbar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.scss'],
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean | null>
  isAnonymous$: Observable<boolean>
  currentUser$: Observable<CurrentUserInterface | null>

  constructor(private store: Store) {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
  }

  ngOnInit(): void {}
}
