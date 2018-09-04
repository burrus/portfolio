import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'work', pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: './modules/about/about.module#AboutModule'
  },
  {
    path: 'work',
    loadChildren: './modules/work/work.module#WorkModule'
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
