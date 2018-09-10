import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForcelyComponent } from './components/forcely/forcely.component';
import { HotwireComponent } from './components/hotwire/hotwire.component'
import { WorkComponent } from './work.component';
import { WorkRouting } from './work-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WorkRouting
  ],
  declarations: [ForcelyComponent, HotwireComponent, WorkComponent]
})

export class WorkModule { }
