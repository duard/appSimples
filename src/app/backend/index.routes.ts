import { Route } from '@angular/router';

import { IndexRoutes } from './index/index';
import { SettingsRoutes } from './settings/index';
import { BackendComponent } from './index';

export const BackendRoutes: Route[] = [
  {
    path: 'backend',
    component: BackendComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      ...IndexRoutes,
      ...SettingsRoutes
    ]
  }
];
