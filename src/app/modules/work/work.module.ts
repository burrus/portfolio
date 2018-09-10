import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotwireComponent } from './components/hotwire/hotwire.component'
import { WorkComponent } from './work.component';
import { WorkRouting } from './work-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WorkRouting
  ],
  declarations: [HotwireComponent, WorkComponent]
})

export class WorkModule { }
