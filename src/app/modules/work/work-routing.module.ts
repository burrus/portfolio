import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HotwireComponent } from './components/hotwire/hotwire.component'
import { WorkComponent } from './work.component';

const routes: Routes = [
    {
      path: 'work',
      component: WorkComponent
    },
    {
      path: 'work/hotwire',
      component: HotwireComponent
    }
];

export const WorkRouting: ModuleWithProviders = RouterModule.forChild(routes);
