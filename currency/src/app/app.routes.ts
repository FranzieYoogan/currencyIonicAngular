import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'dollar',
    loadComponent: () => import('./dollar/dollar.page').then( m => m.DollarPage)
  },
  {
    path: 'euro',
    loadComponent: () => import('./euro/euro.page').then( m => m.EuroPage)
  },
  {
    path: 'libra',
    loadComponent: () => import('./libra/libra.page').then( m => m.LibraPage)
  },
  {
    path: 'header',
    loadComponent: () => import('./header/header.page').then( m => m.HeaderPage)
  },
];
