import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForcelyComponent } from './components/forcely/forcely.component';
import { HailComponent } from './components/hail/hail.component';
import { HotwireComponent } from './components/hotwire/hotwire.component'
import { StormyComponent } from './components/stormy/stormy.component';
import { WorkComponent } from './work.component';
import { WorkRouting } from './work-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WorkRouting
  ],
  declarations: [ForcelyComponent, HailComponent, HotwireComponent, StormyComponent, WorkComponent]
})

export class WorkModule { }
