import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AboutModule } from './modules/about/about.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { WorkModule } from './modules/work/work.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AboutModule,
    BrowserModule,
    CoreModule,
    WorkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}