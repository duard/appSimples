import { Routes } from '@angular/router';

import { FrontendRoutes } from './frontend/index';
import { BackendRoutes } from './backend/index';

export const routes: Routes = [
  ...FrontendRoutes,
  ...BackendRoutes,
  { path: '', redirectTo: 'frontend', pathMatch: 'full' },
];
