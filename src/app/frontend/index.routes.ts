import { Route } from '@angular/router';

import { IndexRoutes } from './index/index';
import { ContatoRoutes } from './contato/index';
import { SobreRoutes } from './sobre/index';
import { FrontendComponent } from './index';

export const FrontendRoutes: Route[] = [
  {
    path: 'frontend',
    component: FrontendComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      ...IndexRoutes,
      ...ContatoRoutes,
      ...SobreRoutes
    ]
  }
];
