import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { AboutRouting } from './about-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    AboutRouting,
    CommonModule,
    SharedModule
  ],
  declarations: [AboutComponent]
})

export class AboutModule {}
