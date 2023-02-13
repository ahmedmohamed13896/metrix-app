import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserService } from './services/user.service';
import { SubordinatesComponent } from './components/subordinates/subordinates.component';
import { SharedModule } from '../shared/shared.module';

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
    RouterModule.forChild(userRoutes)
  ],
  providers:[
    UserService,
  ]
})
export class ProfileModule { }
