import { Routes } from '@angular/router';

import { FrontendRoutes } from './frontend/index';
import { BackendRoutes } from './backend/index';
import { AuthenticationRoutes } from './authentication/index';

export const routes: Routes = [
  ...FrontendRoutes,
  ...BackendRoutes,
  ...AuthenticationRoutes,
  { path: '', redirectTo: 'frontend', pathMatch: 'full' },
];
