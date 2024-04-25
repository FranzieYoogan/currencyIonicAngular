import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },

      {
        path: 'dollar',
        loadComponent: () =>
          import('../dollar/dollar.page').then((m) => m.DollarPage),
      },

      {
        path: 'euro',
        loadComponent: () =>
          import('../euro/euro.page').then((m) => m.EuroPage),
      },

      {
        path: 'libra',
        loadComponent: () =>
          import('../libra/libra.page').then((m) => m.LibraPage),
      },

      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: '',
        redirectTo: '/tabs/dollar',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/dollar',
    pathMatch: 'full',
  },
];
