import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstagramComponent } from './components/instagram/instagram.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InstagramComponent],
  exports: [InstagramComponent]
})
export class SharedModule { }
