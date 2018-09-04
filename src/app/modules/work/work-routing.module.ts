import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkComponent } from './work.component';

const routes: Routes = [
    {
      path: 'work',
      component: WorkComponent
    }
];

export const WorkRouting: ModuleWithProviders = RouterModule.forChild(routes);
