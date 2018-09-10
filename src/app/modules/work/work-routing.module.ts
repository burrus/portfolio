import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForcelyComponent } from './components/forcely/forcely.component';
import { HotwireComponent } from './components/hotwire/hotwire.component';
import { StormyComponent } from './components/stormy/stormy.component';
import { WorkComponent } from './work.component';

const routes: Routes = [
    {
      path: 'work',
      component: WorkComponent
    },
    {
      path: 'work/forcely',
      component: ForcelyComponent
    },
    {
      path: 'work/hotwire',
      component: HotwireComponent
    },
    {
      path: 'work/stormy',
      component: StormyComponent
    }
];

export const WorkRouting: ModuleWithProviders = RouterModule.forChild(routes);
