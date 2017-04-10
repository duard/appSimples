import { Route } from '@angular/router';
import { SobreComponent } from './index';

export const SobreRoutes: Route[] = [
  {
    path: 'sobre',
    component: SobreComponent,
    data: { title: 'Sobre Aplicativo' }
  }
];
