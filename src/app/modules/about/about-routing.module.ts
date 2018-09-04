import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';

const routes: Routes = [
    {
      path: 'about',
      component: AboutComponent
    }
];

export const AboutRouting: ModuleWithProviders = RouterModule.forChild(routes);
