import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserService } from './services/user.service';
import { SubordinatesComponent } from './components/subordinates/subordinates.component';
import { SharedModule } from '../shared/shared.module';
import { UserEffects } from './user.effects';
import { EffectsModule } from '@ngrx/effects';
import { subordinatesReducer } from './reducers';

export const userRoutes: Routes = [
  {
      path: '',
      component: UserProfileComponent,
  },
];


@NgModule({
  declarations: [UserProfileComponent, SubordinatesComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('subordinates', subordinatesReducer),
    EffectsModule.forFeature([UserEffects]),
  ],
  providers:[
    UserService,
  ]
})
export class ProfileModule {
  static forRoot(): ModuleWithProviders<ProfileModule> {
      return {
          ngModule: ProfileModule,
          providers: [
            UserService,
          ]
      }
  }
}
