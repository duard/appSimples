import { Route } from '@angular/router';
import { IndexComponent } from './index';

export const IndexRoutes: Route[] = [
  {
    path: 'index', // cuidado aqui ( era '' antes e agora coloquei '')
    component: IndexComponent,
    data: { title: 'Index Backend' }
  }
];
