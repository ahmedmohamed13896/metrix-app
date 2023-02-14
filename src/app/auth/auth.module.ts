import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { StoreModule } from '@ngrx/store';
import {AuthService} from "./auth.service";
import {authReducer} from './reducers';
import {AuthGuard} from './auth.guard';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './auth.effects';

@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule.forChild([{path: '', component: LoginComponent}]),
      StoreModule.forFeature('auth', authReducer),
      EffectsModule.forFeature([AuthEffects])
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class AuthModule {
    static forRoot(): ModuleWithProviders<AuthModule> {
        return {
            ngModule: AuthModule,
            providers: [
              AuthService,
              AuthGuard
            ]
        }
    }
}
