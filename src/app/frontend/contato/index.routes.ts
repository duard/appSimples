import { Route } from '@angular/router';
import { ContatoComponent } from './index';

export const ContatoRoutes: Route[] = [
  {
    path: 'contato', 
    component: ContatoComponent,
    data: { title: 'Contato Aplicativo' }
  }
];
