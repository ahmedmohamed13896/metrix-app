import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';

import {RouterModule, Routes} from '@angular/router';
import {AuthModule} from './auth/auth.module';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {RouterState, StoreRouterConnectingModule} from '@ngrx/router-store';

import {EffectsModule} from '@ngrx/effects';
import {metaReducers, reducers} from './reducers';
import {AuthGuard} from './auth/auth.guard';
import {EntityDataModule} from '@ngrx/data';
import { authInterceptorProviders } from './auth/auth.interceptor';


const routes: Routes = [
  {
    path: 'user-profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard]
  },
  {
      path: '**',
      redirectTo: '/'
  }
];


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, {}),
        HttpClientModule,
        AuthModule.forRoot(),
        StoreModule.forRoot(reducers, {
            metaReducers,
            runtimeChecks : {
                strictStateImmutability: true,
                strictActionImmutability: true,
                strictActionSerializability: true,
                strictStateSerializability:true
            }
        }),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot({}),
        StoreRouterConnectingModule.forRoot({
            stateKey: 'router',
            routerState: RouterState.Minimal
        })
    ],
    providers:[
      authInterceptorProviders,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
