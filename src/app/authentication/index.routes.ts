import { Route } from '@angular/router';

import { AuthenticationComponent } from './index';

import { SigninRoutes } from './signin/index';

export const AuthenticationRoutes: Route[] = [
  {
    path: 'auth',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'entrar', pathMatch: 'full' },
      ...SigninRoutes
    ]
  }
];
