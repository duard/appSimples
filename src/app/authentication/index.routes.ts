import { Route } from '@angular/router';

import { AuthenticationComponent } from './index';

import { SigninRoutes } from './signin/index';
import { LoginRoutes } from './login/index';

export const AuthenticationRoutes: Route[] = [
  {
    path: 'auth',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      ...SigninRoutes,
      ...LoginRoutes
    ]
  }
];
