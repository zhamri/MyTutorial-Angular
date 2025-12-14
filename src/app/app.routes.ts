import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then(m => m.Home),
  },
  {
    path: 'hello',
    loadComponent: () => import('./hello/hello').then(m => m.Hello),
  },
  { path: '**', redirectTo: '' },
];
