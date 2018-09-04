import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkComponent } from './work.component';
import { WorkRouting } from './work-routing.module'

@NgModule({
  imports: [
    CommonModule,
    WorkRouting
  ],
  declarations: [WorkComponent]
})

export class WorkModule { }
