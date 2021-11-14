import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { StoreModule } from '@ngrx/store'
import { authReducer } from '@auth/store/reducers'
import { authFeatureKey } from '@auth/store/selectors'

import { RegisterComponent } from './components/register/register.component'

const routes: Routes = [{ path: 'register', component: RegisterComponent }]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature(authFeatureKey, authReducer),
  ],
  exports: [],
  declarations: [RegisterComponent],
  providers: [],
})
export class AuthModule {}
