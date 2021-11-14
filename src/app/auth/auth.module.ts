import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { authReducer } from '@auth/store/reducers'
import { authFeatureKey } from '@auth/store/selectors'
import { RegisterComponent } from '@auth/components/register/register.component'
import { AuthService } from '@auth/services/auth.service'
import { RegisterEffect } from '@auth/store/effects/register.effect'

import { BackendErrorMessagesModule } from '@shared/modules/backendErrorMessages/backendErrorMessages.module'
import { PersistanceService } from '@shared/services/persistance.service'

const routes: Routes = [{ path: 'register', component: RegisterComponent }]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature(authFeatureKey, authReducer),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule,
  ],
  exports: [],
  declarations: [RegisterComponent],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
