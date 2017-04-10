import { Route } from '@angular/router';
import { SigninComponent } from './index';

export const SigninRoutes: Route[] = [
  {
    path: 'entrar',
    component: SigninComponent,
    data: { title: 'Entrar no Sistema' },
  }
];
